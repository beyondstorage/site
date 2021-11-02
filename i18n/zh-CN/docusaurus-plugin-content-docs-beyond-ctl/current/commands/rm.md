# rm

BeyondCTL supports remove files and multipart objects.

```
NAME:
   byctl rm - remove file from storager

USAGE:
   byctl rm [command options] [source]

OPTIONS:
   --workers value         Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]
   --recursive, -r, -R     remove directories and their contents recursively
 (default: false)
   --multipart  remove multipart object (default: false)
   --help, -h   show help (default: false)
```

例如：

```
byctl rm example:/test.mp4
```

## Remove directory

By default, BeyondCTL does not switch to the remove directory, we can specify the remove directory with `--recursive`, `-r` or `-R`. 例如：

```
byctl rm -r example:/testDir
```

## Remove multipart object

We can specify the remove multipart object with `--multipart`. 例如：

```
byctl rm --multipart example:/multipart
```

This command will remove all multipart objects in service`example` with path `multipart`.

If we want to remove all multipart objects in service`example` with path prefix `multipart`, we can do it like the following command:

```
byctl rm --multipart -r example:/multipart
```

## 限制并发数量

BeyondCTL support concurrency rm be default. 我们可以通过 `--workers` 控制并行数量。

默认情况下，我们将有 `4` 工作者。

我们可以将工人人数增加到 `10`：

```shell
byctl rm --workers=10 example:/test.mp4
```

