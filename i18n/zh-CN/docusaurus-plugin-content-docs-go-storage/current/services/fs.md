Local file system

## Project

<https://go.beyondstorage.io/services/fs>

## Config

### Storager

#### Available Pairs

| Name                             | Required | Comments |
| -------------------------------- | -------- | -------- |
| [work_dir](../pairs/work_dir.md) | N        | work dir |

#### 示例

Init storager (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
    _ "go.beyondstorage.io/services/fs/v4"
    "go.beyondstorage.io/v5/services"
)

store, err := services.NewStoragerFromString("fs:///<work_dir>")
if err != nil {
    log.Fatalf("fs new service: %v", err)
}
```

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)
- [Copier](../operations/copy.md)
- [Mover](../operations/move.md)
- [Appender](../operations/appender/index.md)
