---
title: "2021-17 Weekly Report"
author: "JinnyYi"
author_url: "https://github.com/JinnyYi"
tags: [updates, weekly-report]
---

Hello everyone, here is the weekly report for [AOS](https://aos.dev), range from 2021-04-25 to 2021-04-30.

## Library

### Summer 2021 of Open Source Promotion Plan

Open Source Promotion Plan, a.k.a., OSPP, encourage everyone to pay close attention to open source software and open source community, aiming to cultivate and explore more outstanding developers.

This week we applied to participate in OSSP - Summer 2021 and posed the subject . [@Xuanwo](https://github.com/Xuanwo), [@Prnyself](https://github.com/Prnyself) and [@xxchan](https://github.com/xxchan) will take part in the subject, and we will recruit contributors from student groups.

For details, please refer to https://hackmd.io/XcdKgrqFRs6b1CazTxYX7g.

### Appender Support

`Appender` is used to append content to the tail of file.

This week, we implement  `Appender` for the services that support this feature. [CommitAppend](https://github.com/aos-dev/specs/blob/master/rfcs/0-commit-append.md) is introduced to finish an append procedure as service like dropbox needs a `close` to mark this appends process has been finished. 

It should be noted that the current `delete` behavior should be different for fs and object storage services to make sure all services could pass the integration test . Please keep an eye on our track issue: [Make Delete idempotent](https://github.com/aos-dev/go-storage/issues/551).

### Server Side Encryption Support

Server Side Encryption, a.k.a., SSE is a feature to encrypt data on server side, which is used by various applications. 

 [@xxchan](https://github.com/xxchan) was responsible for completing the SSE support for the services this week, including [Implement SSE support](https://github.com/aos-dev/go-storage/issues/523), [SEE-S3 sample code](https://github.com/aos-dev/go-storage-example/blob/master/sse_s3.go) and related documents. [SSE blog](https://github.com/aos-dev/site/blob/master/blog/2021-04-27-sse.md) shows what is SSE and how to use SSE in `go-storage`.

## dm

`dm` is a data migration service and a long time effort.

To ensure that task recovery carried out according to the plan, even if it is interrupted for many times, [Prnyself](https://github.com/Prnyself) finished [Proposal: Add support fir stop and resume task](https://hackmd.io/@lance-ren/BJM1e2fw_) this week and will start the demo.

Hi-Fi  of `dm` service is under designing. The [Hi-Fi prototype interaction](https://www.figma.com/proto/tZBW1fMDLlcdFpaHJYih9B/Data-Migration-Prototype?page-id=1060%3A51&node-id=1060%3A14951&viewport=3370%2C1130%2C0.125&scaling=min-zoom) is on trial and welcome feedback.
