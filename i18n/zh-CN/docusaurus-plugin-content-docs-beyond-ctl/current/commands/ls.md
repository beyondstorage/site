# ls

BeyondCTL support list dirs and files from storage services.

```
NAME:
   byctl ls -

USAGE:
   byctl ls [command options] [arguments...]

OPTIONS:
   --workers value         Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]
   -l                      use a long listing format (default: false)
   --format value          across long -l
   --help, -h              show help (default: false)
```

例如：

```
byctl ls example:/test.mp4
```

## Long list

By default, the list is formatted as a short list with only the filename format. If we need a long format, we can use `-l` or `--format=long` to specify the long format. 例如：

```
byctl ls -l example:/test.mp4
byctl ls --format=long example:/test.mp4
```

Both of the above commands can be used for long format.

## 限制并发数量

BeyondCTL support concurrency ls be default. 我们可以通过 `--workers` 控制并行数量。

默认情况下，我们将有 `4` 工作者。

我们可以将工人人数增加到 `10`：

```shell
byctl ls --workers=10 example:/test.mp4
```
