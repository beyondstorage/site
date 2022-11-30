# mv

BeyondCTL support move file from source storager to target storager.

```
NAME:
   byctl mv - move file from source storager to target storager

USAGE:
   byctl mv [command options] [source] [target]

OPTIONS:
   --config FILE, -c FILE       Load config from FILE (default: "/root/.config/byctl/config.toml") [$BEYOND_CTL_CONFIG]
   --workers value              Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]
   --read-speed-limit value     Specify speed limit for read I/O operations, for example, 1MB, 10mb, 3GiB. [$BEYOND_CTL_READ_SPEED_LIMIT]
   --write-speed-limit value    Specify speed limit for write I/O operations, for example, 1MB, 10mb, 3GiB. [$BEYOND_CTL_WRITE_SPEED_LIMIT]
   --multipart-threshold value  Specify multipart threshold. If source file size is larger than this value, byctl will use multipart method to move file. (default: "1GiB") [$BEYOND_CTL_MULTIPART_THRESHOLD]
   --recursive, -r, -R          move directories recursively (default: false)
   --help, -h                   show help (default: false)
```

例如：

```
byctl mv test.mp4 example:/test.mp4
```

## Move directory

We can specify the move directory with `--recursive`, `-r` or `-R`.

```
byctl mv -r testDir example:/testDir
```

## 通过分段上传加速复制

BeyondCTL supports speed up the move procedure via [Multipart](/docs/go-storage/operations/multiparter/index).

By default, BeyondCTL will switch to `multipart` method while the source file is larger than 1 GiB. We can specify the threshold by `--multipart-threshold`: 我们可以通过 `--multipart-directly` 指定阈值：

例如， 我们可以将阈值降低为 `100MB`  以强制 beyondctl 为大于 `100MB` 的文件使用分段上传。

```shell
byctl mv --multipart-threshold=100MiB test.mp4 example:/test.mp4
```

## 速度限制

有时，我们不想要 beyondctl 使用太多资源。 我们可以通过 `--read-speedlimit` 或 `--rardspeedlimit` 来限制读取或写入速度。

例如，我们可以将全局读取速度限制为 1 MiB。

```shell
byctl mv --read-speed-limit=1MiB test.mp4 example:/test.mp4
```

## 限制并发数量

BeyondCTL support concurrency mv be default. 我们可以通过 `--workers` 控制并行数量。

默认情况下，我们将有 `4` 工作者。

我们可以将工人人数增加到 `10`：

```shell
byctl mv --workers=10 test.mp4 example:/test.mp4
```
