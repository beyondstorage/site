---
title: 2021-15 Weekly Report
author: Prnyself
author_url: https://github.com/Prnyself
tags: [updates, weekly-report]
---

This is the weekly report for [AOS](https://aos.dev), range from 2021-04-12 to 2021-04-16.

## Application

### dm

This week we started design review.
https://www.figma.com/file/tZBW1fMDLlcdFpaHJYih9B.

And we pre-released: [v0.2.0](https://github.com/aos-dev/dm/releases/tag/v0.2.0).

In this pre-release we:
- add create task dialog in ui [#40](https://github.com/aos-dev/dm/pull/40)
- refactor into grpc services [#51](https://github.com/aos-dev/dm/pull/51)

## Library

### go-storage

This week we fixed code generation by [Increase stablility of generated code (#526)](https://github.com/aos-dev/go-storage/pull/526)

And add UnimplementedStub to have forward compatible implementations [#524](https://github.com/aos-dev/go-storage/pull/524),
in which we introduced a breaking change by `UnimplementedStub`.

So we will make sure all service implement it after we realease go-storage v3.5.0 in next weeks. [Roadmap](https://github.com/aos-dev/go-storage/issues/527)

### go-service-azblob

This week we Implement Create API [#10](https://github.com/aos-dev/go-service-azblob/pull/10)

### go-service-cos

This week we Implement Create API [#13](https://github.com/aos-dev/go-service-cos/pull/13)

### go-service-dropbox

This week we Implement Create API [#8](https://github.com/aos-dev/go-service-dropbox/pull/8)

### go-service-kodo

This week we Implement Create API [#15](https://github.com/aos-dev/go-service-kodo/pull/15)

### go-service-oss

This week we Implement Create API [#11](https://github.com/aos-dev/go-service-oss/pull/11)

### go-service-gcs

This week we Implement Create API [#15](https://github.com/aos-dev/go-service-gcs/pull/15)

### go-service-s3

This week we released: [v1.1.0](https://github.com/aos-dev/go-service-s3/releases/tag/v1.1.0)

In this release we:
- implement `Create` API [#56](https://github.com/aos-dev/go-service-s3/pull/56)
- implement default pair support for service [#16](https://github.com/aos-dev/go-service-s3/pull/16)

### go-service-uss

This week we Implement default pair and Create API [#4](https://github.com/aos-dev/go-service-uss/pull/4)

## Community

- [PingCAP/dumping](https://github.com/pingcap/dumpling) approved the proposal: [Use aos-dev/go-storage to replace storage.ExternalStorage](https://hackmd.io/@xuanwo/B1-JmNN8O)
    - Meeting Link: [https://tidbcommunity.slack.com/archives/C013HGZMBAR/p1618491677044900](https://tidbcommunity.slack.com/archives/C013HGZMBAR/p1618491677044900)
    - Our Changes
        - More Multipart support
        - SSE support
        - More test coverage
        - Performance
- [QingStor/qsftpd](https://github.com/qingstor/qsftpd) will adopt go-storage and transfer to AOS org.

## New hands

Welcome new hands on board!
- [Jinny](https://github.com/JinnyYi)

