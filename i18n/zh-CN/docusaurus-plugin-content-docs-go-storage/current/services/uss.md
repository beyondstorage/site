[UPYUN Storage Service](https://www.upyun.com/products/file-storage)

## Project

<https://go.beyondstorage.io/services/uss>

## Config

### Storager

| Name                                 | Required | Comments                                |
| ------------------------------------ | -------- | --------------------------------------- |
| [credential](../pairs/credential.md) | Y        | only support `hmac` protocol            |
| [name](../pairs/name.md)             | Y        | bucket name                             |
| [work_dir](../pairs/work_dir.md)     | N        | work dir                                |
| [endpoint](../pairs/endpoint.md)     | Y        | specific domain to access this storager |

## Example

Init storager (see [this page](../operations/index.md) for details)

```go
import (
    _ "go.beyondstorage.io/services/uss/v3"
    "go.beyondstorage.io/v5/services"
)

store, err := services.NewStoragerFromString("uss://<bucket_name>/<work_dir>?credential=hmac:<account_name>:<account_key>&endpoint=https:<domain>")
```

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)
