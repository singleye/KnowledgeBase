# How to install tensorflow v1.7 on NVIDIA Jetson TX2

Tensorflow is a popular machine learning platform and the latest version 1.7 comes out recently. I have a NVIDIA Jetson TX2 development board and I would like to use tensorflow on it, but tensorflow doesn't come along with the Jetpack. Here is what I did to compile one from the source code.


## Environment

* Jetpack: v3.2

## Build process

### Step1: Upgrade Jetpack

$ sudo apt-get upgrade

### Step2: Compile [bazel](https://github.com/bazelbuild/bazel)

I tried 2 ways to build bazel and realized it's far more easier to build the 'dist' version.

1. Build Bazel

On environment not bootstraping with protoc/grpc installed, use the 'dist' distribution.

```sh
wget https://github.com/bazelbuild/bazel/releases/download/0.11.1/bazel-0.11.1-dist.zip
```

Decompress the source and enter the source root directory, then run the commands below to build bazel:

```sh
./compile.sh
cp output/bazel /usr/local/bin/
```

**More words about the non-dist version:**

If you would like to try build from the non-dist version of source code, you can download it from here:

```sh
https://github.com/bazelbuild/bazel/archive/0.11.1.tar.gz
```

Building it depends on a bunch of stuffs:

[protobuf](https://github.com/google/protobuf)
[netty-tcnative](http://netty.io/wiki/forked-tomcat-native.html#wiki-h2-5)
[grpc-java](https://github.com/grpc/grpc-java/blob/master/COMPILING.md)


### Step3: Build tensorflow

Install python 2.7 dependencies:

```sh
$ sudo apt-get install python-numpy python-dev python-pip python-wheel
```

Install python 3.x dependencies:

```sh
$ sudo apt-get install python3-numpy python3-dev python3-pip python3-wheel
```

Download source:

```
wget https://github.com/tensorflow/tensorflow/archive/v1.7.0.tar.gz
```

Pre-build configure, here are the settings need to set manually:

* Select 'CUDA' support
* cuDNN library path: /usr/lib/aarch64-linux-gnu
* CUDA compute capability: 6.2

```sh
$ ./configure
WARNING: ignoring http_proxy in environment.
Extracting Bazel installation...
You have bazel 0.11.1- (@non-git) installed.
Please specify the location of python. [Default is /usr/bin/python]:


Found possible Python library paths:
  /usr/local/lib/python2.7/dist-packages
  /usr/lib/python2.7/dist-packages
Please input the desired Python library path to use.  Default is [/usr/local/lib/python2.7/dist-packages]

Do you wish to build TensorFlow with jemalloc as malloc support? [Y/n]:
jemalloc as malloc support will be enabled for TensorFlow.

Do you wish to build TensorFlow with Google Cloud Platform support? [Y/n]:
Google Cloud Platform support will be enabled for TensorFlow.

Do you wish to build TensorFlow with Hadoop File System support? [Y/n]:
Hadoop File System support will be enabled for TensorFlow.

Do you wish to build TensorFlow with Amazon S3 File System support? [Y/n]:
Amazon S3 File System support will be enabled for TensorFlow.

Do you wish to build TensorFlow with Apache Kafka Platform support? [y/N]:
No Apache Kafka Platform support will be enabled for TensorFlow.

Do you wish to build TensorFlow with XLA JIT support? [y/N]:
No XLA JIT support will be enabled for TensorFlow.

Do you wish to build TensorFlow with GDR support? [y/N]:
No GDR support will be enabled for TensorFlow.

Do you wish to build TensorFlow with VERBS support? [y/N]:
No VERBS support will be enabled for TensorFlow.

Do you wish to build TensorFlow with OpenCL SYCL support? [y/N]:
No OpenCL SYCL support will be enabled for TensorFlow.

Do you wish to build TensorFlow with CUDA support? [y/N]: y
CUDA support will be enabled for TensorFlow.

Please specify the CUDA SDK version you want to use, e.g. 7.0. [Leave empty to default to CUDA 9.0]:


Please specify the location where CUDA 9.0 toolkit is installed. Refer to README.md for more details. [Default is /usr/local/cuda]:


Please specify the cuDNN version you want to use. [Leave empty to default to cuDNN 7.0]:


Please specify the location where cuDNN 7 library is installed. Refer to README.md for more details. [Default is /usr/local/cuda]:/usr/lib/aarch64-linux-gnu


Do you wish to build TensorFlow with TensorRT support? [y/N]:

Please specify a list of comma-separated Cuda compute capabilities you want to build with.
You can find the compute capability of your device at: https://developer.nvidia.com/cuda-gpus.
Please note that each additional compute capability significantly increases your build time and binary size. [Default is: 3.5,5.2]6.2


Do you want to use clang as CUDA compiler? [y/N]:
nvcc will be used as CUDA compiler.

Please specify which gcc should be used by nvcc as the host compiler. [Default is /usr/bin/gcc]:


Do you wish to build TensorFlow with MPI support? [y/N]:
No MPI support will be enabled for TensorFlow.

Please specify optimization flags to use during compilation when bazel option "--config=opt" is specified [Default is -march=native]:


Would you like to interactively configure ./WORKSPACE for Android builds? [y/N]:
Not configuring the WORKSPACE for Android builds.

Preconfigured Bazel build configs. You can use any of the below by adding "--config=<>" to your build command. See tools/bazel.rc for more details.
        --config=mkl            # Build with MKL support.
        --config=monolithic     # Config for mostly static monolithic build.
```

Start the build:

```sh
$ bazel build --config=opt --local_resources 3072,4.0,1.0 --config=cuda //tensorflow/tools/pip_package:build_pip_package
```

After compilation, generate pip package to 'target' directory:

```sh
$ ./bazel-bin/tensorflow/tools/pip_package/build_pip_package target
```
