---
title: Introduction 
sidebar_position: 1
---

[BeyondCTL](https://github.com/beyondstorage/beyond-ctl) is a command-line tool for all storage services.

```shell
# Create a new profile if we don't have one.
byctl profile add example s3://<bucketname>/path?credential=hmac:<access_key>:<secret_key>&endpoint=https:<example.com>&location=<region>
# Copy local file `test.mp4` to the service specified by profile example. 
byctl cp test.mp4 example:/test.mp4
```

## Features

For now, we support following features:

- [profile](./commands/profile.md): Multiple profile support.
- [cp](./commands/cp.md): Copy file from source to destination.
- [rm](./commands/rm.md): Remove file from storager.
- [stat](./commands/stat.md): Get file or storage info.
- [tee](./commands/tee.md): Pipe data from stdin into storage services.
- [cat](./commands/cat.md): Pipe data from storage services into stdout.
- [ls](./commands/ls.md): List dirs and files from storage services.

## Call for help!

There are so much works to do, and we are welcome all PRs.

Please visit [issues](https://github.com/beyondstorage/beyond-ctl/issues) to know what kind of help to provide.
