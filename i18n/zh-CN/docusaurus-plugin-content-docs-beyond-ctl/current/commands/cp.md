# cp

BeyondCTL 支持在存储服务之间复制文件和文件夹。

```shell
NAME:
   byctl cp - copy file from source storager to target storager

USAGE:
   byctl cp [command options] [source] [target]

OPTIONS:
   --multipart-threshold value  Specify multipart threshold. If source file size is larger than this value, beyondctl will use multipart method to copy file. (default: 1GB) [$BEYOND_CTL_MULTIPART_THRESHOLD]
   --workers value              Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]
   --read-speed-limit value     Specify speed limit for read I/O operations, for example, 1MB, 10mb, 3GiB. [$BEYOND_CTL_READ_SPEED_LIMIT]
   --write-speed-limit value    Specify speed limit for write I/O operations, for example, 1MB, 10mb, 3GiB. [$BEYOND_CTL_WRITE_SPEED_LIMIT]
   --recursive, -r, -R          copy directories recursively (default: false)
   --help, -h                   show help (default: false)
```

例如：

```shell
byctl cp test.mp4 example:/test.mp4
```

## Copy directory

BeyondCTL supports copy directory.

By default, BeyondCTL does not switch to the copy directory, we can specify the copy directory with `--recursive`, `-r` or `-R`.

For example, we copy the local directory `testDir` to the service specified by profile example.

```shell
byctl cp -r testDir example:/testDir
```

## 通过分段上传加速复制

BeyondCTL 支持通过 [Multipart](/docs/go-storage/operations/multiparter/index) 加快复制过程。

By default, BeyondCTL will switch to `multipart` method while the source file is larger than 1 GiB. We can specify the threshold by `--multipart-threshold`: 我们可以通过 `--multipart-directly` 指定阈值：

例如， 我们可以将阈值降低为 `100MB`  以强制 beyondctl 为大于 `100MB` 的文件使用分段上传。

```shell
byctl cp --multipart-threshold=100MiB test.mp4 example:/test.mp4
```

## 速度限制

有时，我们不想要 beyondctl 使用太多资源。 我们可以通过 `--read-speedlimit` 或 `--rardspeedlimit` 来限制读取或写入速度。

例如，我们可以将全局读取速度限制为 1 MiB。

```shell
byctl cp --read-speed-limit=1MiB test.mp4 example:/test.mp4
```

## 限制并发数量

BeyondCTL 默认采取并发的方式复制文件。 我们可以通过 `--workers` 控制并行数量。

默认情况下，我们将有 `4` 工作者。

我们可以将工人人数增加到 `10`：

```shell
byctl cp --workers=10 test.mp4 example:/test.mp4
```
