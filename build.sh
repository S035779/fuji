rm -rf gen-java gen-cpp gen-py gen-php gen-js gen-nodejs gen-html

thrift -r -gen cpp thrift/fuji.thrift
thrift -r -gen java thrift/fuji.thrift
thrift -r -gen php:server thrift/fuji.thrift
thrift -r -gen js:node thrift/fuji.thrift
thrift -r -gen js thrift/fuji.thrift
thrift -r -gen py thrift/fuji.thrift
thrift -r -gen html thrift/fuji.thrift

thrift -r -gen cpp thrift/tutorial.thrift
thrift -r -gen java thrift/tutorial.thrift
thrift -r -gen php:server thrift/tutorial.thrift
thrift -r -gen js:node thrift/tutorial.thrift
thrift -r -gen js thrift/tutorial.thrift
thrift -r -gen py thrift/tutorial.thrift
thrift -r -gen html thrift/tutorial.thrift
