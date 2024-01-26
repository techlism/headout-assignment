# To run the docker container with resource limit as specified and compatibility with x86 and ARM

Clone this repository.

``` docker build -t headout-assignment . ```

The --memory and --cpus flags are used to set resource limits

``` docker run --memory=1500m --cpus=2 --platform=linux/arm64,linux/amd64 headout-assignment ```

# Optimizations in the Assignment
In my assignment, I made two significant optimizations to improve the efficiency of the application.

## Switch from readFileSync to createReadStream and readline
Initially, I was using fs.readFileSync to read files, which loads the entire file into memory. This was inefficient and could cause the application to run out of memory for large files.

To optimize this, I switched to fs.createReadStream combined with readline. This approach reads the file in chunks and allows processing to start as soon as the first chunk is available.
It's more memory-efficient and performs better with large files.

## Script to Generate Large Text Files
To test the application's performance with large files, I created a script (generateTxt.js) that generates 31 text files, each 100MB in size. It uses the fs and crypto library.
