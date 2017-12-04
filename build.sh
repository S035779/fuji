rm -rf gen-java gen-cpp gen-py gen-php gen-js gen-nodejs gen-html

thrift -r -gen cpp thrift/fuji.thrift
thrift -r -gen java thrift/fuji.thrift
thrift -r -gen php:server thrift/fuji.thrift
thrift -r -gen js:node thrift/fuji.thrift
thrift -r -gen js thrift/fuji.thrift
thrift -r -gen py thrift/fuji.thrift
thrift -r -gen html thrift/fuji.thrift

find gen-js -name "*_types.js" | xargs cat > public/client.js
find gen-js -type f -and -not -name "*_types.js" | xargs cat >> public/client.js
