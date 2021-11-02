[Gdrive](https://www.google.com/drive/)

## Project

<https://go.beyondstorage.io/services/gdrive>

## Config

### Storager

#### Available Pairs

| Name                               | Required | Comments                |
|------------------------------------|----------|-------------------------|
| [name](../pairs/credential.md)     | Y        | name(whatever you want) |
| [credential](../pairs/credential.md) | Y      | support `base64` and `file` protocol: `base64` is the base64 of token content, `file` is the absolute path to token file.|
| [work_dir](../pairs/work_dir.md)   | N        | work dir                |

## Examples

Init storager (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
    _ "go.beyondstorage.io/services/gdrive"
    ps "go.beyondstorage.io/v5/pairs"
    "go.beyondstorage.io/v5/services"
)

store, err := services.NewStoragerFromString("gdrive://?name=<a_meaningful_name>&credential=file:<abs_path_of_credential>")

if err != nil {
	panic("gdrive new storage fail!")
}
```

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)
