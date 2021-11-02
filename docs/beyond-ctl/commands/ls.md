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

For example:

```
byctl ls example:/test.mp4
```

## Long list

By default, the list is formatted as a short list with only the filename format. If we need a long format, we can use `-l` or `--format=long` to specify the long format. For example:

```
byctl ls -l example:/test.mp4
byctl ls --format=long example:/test.mp4
```

Both of the above commands can be used for long format.

## Control concurrency via Workers

BeyondCTL support concurrency ls be default. We can control the concurrent workers by `--workers`.

By default, we will have `4` workers.

We can increase the workers number to `10` via:

```shell
byctl ls --workers=10 example:/test.mp4
```
