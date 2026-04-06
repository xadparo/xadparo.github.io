FROM ruby:3.3

WORKDIR /site

COPY Gemfile Gemfile.lock ./

RUN bundle config set path /usr/local/bundle \
  && bundle install
