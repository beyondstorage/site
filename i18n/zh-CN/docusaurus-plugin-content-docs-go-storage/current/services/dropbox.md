[Dropbox](https://www.dropbox.com)

## Project

<https://go.beyondstorage.io/services/dropbox>

## Config

### Storager

#### Available Pairs

| Name                                 | Required | Comments                        |
| ------------------------------------ | -------- | ------------------------------- |
| [credential](../pairs/credential.md) | Y        | only support `api_key` protocol |
| [work_dir](../pairs/work_dir.md)     | N        | work dir                        |

#### 示例

Init storager (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
    _ "go.beyondstorage.io/services/dropbox/v3"
    "go.beyondstorage.io/v5/services"
)

store, err := services.NewStoragerFromString("dropbox:///<work_dir>?credential=hmac:<account_name>:<account_key>")
if err != nil {
    log.Fatalf("dropbox new service: %v", err)
}
```

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)

- [Appender](../operations/appender/index.md)
