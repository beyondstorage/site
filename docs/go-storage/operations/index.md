---
title: Introduction
sidebar_position: 1
---

Operation means a single action that we can do on a storage service.

![](/docs/go-storage/operations/operations.png)

## Servicer

[servicer](servicer/index.md) is used to maintain the storage service.

We use `Servicer` to create/delete/get/list storages.

## Storager

[storager](storager/index.md) is the interface for storage service.

We use `Storager` to maintain objects.

## How to initialize a Servicer/Storager?

We have connection string support. 

The format of the connection string is (optional parts marked by squared brackets):

`<type>://[<name>][<work_dir>][?enable_feature1&...&enable_featureN&key1=value1&...&keyN=valueN]`

- name: storage name, e.g., bucket name. MUST NOT contain /
- work_dir: For object storage, it is prefix; for fs, it is directory path. MUST start with / for every storage services.
- For the `enable_feature` query string:
  - `feature` is the feature name defined in `toml`, and the format SHOULD be exactly the same.
- For the `key=value` pairs:
  - If `=value` is missing, we just ignore the pair. But `key=` means a pair with a blank value.
  - The `key` is the pair name defined in `toml` and the format SHOULD be exactly the same.
  - Or the `key` is the default pair name prefixed with `default_` and followed by pair name described above.
- If there are multiple pairs with the same key, the first one will be picked.

So a valid connection string could be:

- `s3://bucket_name`
- `s3://bucket_name/prefix`
- `s3://?credential=hmac:xxxx:xxxx&endpoint=http:s3.us-east-2.amazonaws.com`
- `s3://bucket_name/prefix?credential=hmac:xxxx:xxxx&endpoint=http:s3.us-east-2.amazonaws.com`
- `s3://bucket_name/prefix?enable_virtual_dir&credential=hmac:xxxx:xxxx&endpoint=http:s3.us-east-2.amazonaws.com&default_storage_class=STANDARD`
- `fs://`
- `fs:///tmp`

For more details, take a look at [GSP-90](https://github.com/beyondstorage/specs/blob/master/rfcs/90-re-support-initialization-via-connection-string.md) and [GSP-700](https://github.com/beyondstorage/go-storage/blob/master/docs/rfcs/700-config-features-and-defaultpairs-via-connection-string.md).

:::caution

To use a service, do not forget to import the corresponding `go-service-*` package so that the service can be registered in the `init` function.

:::

```go
import (
	_ "go.beyondstorage.io/services/fs/v3"
	"go.beyondstorage.io/v5/services"
)

store, err := services.NewStoragerFromString("fs:///tmp")
```

### Initialize directly with pairs

Alternatively, you can initialize directly with pairs, if you want to

- use a complex pair that connection string doesn't support yet or is not convenient to write by hand
- construct pairs from your config format without transforming into the connection string format
- reduce the overheads of parsing the connection string

```go
import (
	_ "go.beyondstorage.io/services/fs/v3"
    "go.beyondstorage.io/v5/pairs"
	"go.beyondstorage.io/v5/services"
)

store, err := services.NewStorager("fs", pairs.WithWorkDir("/tmp"))
```
