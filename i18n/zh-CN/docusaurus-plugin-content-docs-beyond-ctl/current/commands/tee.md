# tee

BeyondCTL support read data from standard input and output its contents to a file.

```
NAME:
   byctl tee - used to read data from standard input and output its contents to a file

USAGE:
   byctl tee [command options] [target]

OPTIONS:
   --config FILE, -c FILE  Load config from FILE (default: "/root/.config/byctl/config.toml") [$BEYOND_CTL_CONFIG]
   --workers value         Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]
   --expected-size value   expected size of the input file (default: "128MiB")
   --help, -h              show help (default: false)
```

例如：

```
byctl tee example:/testTee
```

## Use with the cat command

The `tee` command can be used with the `cat` command, for example:

```
cat exampleTee | byctl tee example:testTee
```

This command will write the contents of the local file `exampleTee` to the file with the path `testTee` in the specified service `example` via the Linux pipeline `|` connection `tee` command.

The `tee` command can be used with the BeyondCTL's `cat` command, for example:

```
byctl cat another:testTee | byctl tee example:testTee
```

## Tee with expected size

If we know the exact size of the file, we can set `-expected-size` to accurately determine the part size of the file for multipart uploads. For example, the local file `exampleTee` is `2MiB` in size:

```
cat exampleTee | byctl tee --expected-size=2MiB example:testTee
```

