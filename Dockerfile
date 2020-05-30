FROM ubuntu:18.04 AS build-env

RUN set -x \
    && apt-get update \
    && yes | unminimize \
    # && apt-get install -y git gcc libc6 build-essential libpthread-stubs0-dev openssl libssl-dev libreadline6-dev libncurses5-dev collect2 \
    && apt-get install -y \
        cmake \
        gcc \
        g++ \
        libncurses5-dev \
        libreadline-dev \
        libssl-dev \
        make \
        zlib1g-dev
    # && ln -s /usr/bin/make /usr/bin/gmake

WORKDIR /work
COPY . .
ENV LD_LIBRARY_PATH=/usr/local/lib64
ENV USE_MUSL=YES
RUN set -x \
    && sed -e '/SiIsEnterpriseFunctionsRestrictedOnOpenSource(s->Cedar);/d' -i src/Cedar/Server.c \
    # Build and install
    && ./configure \
    && make -C tmp \
    && make -C tmp install \
    && chmod +x /usr/local/bin/vpn*

# RUN ls /usr/local && exit 1
# RUN ls && cat tmp/Makefile && exit 1

FROM ubuntu:18.04

RUN set -eux \
    && apt-get update && apt-get install -y \
        libssl-dev \
        libreadline6-dev \
        xtail

COPY --from=build-env /usr/local/bin /usr/local/bin
COPY --from=build-env /usr/local/libexec/softether /usr/local/libexec/softether
COPY --from=build-env /usr/local/lib /usr/local/lib
ENV LD_LIBRARY_PATH=/usr/local/lib64

WORKDIR /usr/local/bin
RUN mkdir server_log security_log packet_log
CMD sleep 1s && cat *_log/* && xtail *_log/* & /usr/local/bin/vpnserver execsvc

# CMD /usr/local/vpnserver/vpnserver execsvc & ls -al && xtail *_log/*
