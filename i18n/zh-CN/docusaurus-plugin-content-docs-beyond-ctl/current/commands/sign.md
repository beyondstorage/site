# sign

BeyondCTL support get the signed URL by the source object.

```
NAME:
   byctl sign - get the signed URL by the source

USAGE:
   byctl sign [command options] [source]

OPTIONS:
   --config FILE, -c FILE  Load config from FILE (default: "/root/.config/byctl/config.toml") [$BEYOND_CTL_CONFIG]
   --workers value         Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]
   --expire value          the number of seconds until the signed URL expires (default: 300)
   --help, -h              show help (default: false)
```

例如：

```
byctl sign example:/test.mp4
```

## Sign with expire

By default, the created `URL` expires in `300` seconds. If we want to specify the expire time, we can use flag `--expire`.

```
byctl sign --expire=150 example:/test.mp4
```

This command changes the expire time to 150 seconds.

## 限制并发数量

BeyondCTL support concurrency sign be default. 我们可以通过 `--workers` 控制并行数量。

默认情况下，我们将有 `4` 工作者。

我们可以将工人人数增加到 `10`：

```shell
byctl sign --workers=10 example:/test.mp4
```
