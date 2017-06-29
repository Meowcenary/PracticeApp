# README

Simple CRUD API written in Rails with React
The end goal is to have a simple D&D 5th Edition
character creation and csv/pdf download tool

There are currently hree branches in the dev process 
  - master , this is essentially a back-up stage
    since there is no qa or production branch
  - stage , this is intended to be the most stable
    current release. Merges into master.
  - develop , volatile branch where all new changes 
    managed and merged together. Merges into stage.

The process is pretty simple, check-out a feature branch
or just work straight off of develop, when work is complete
push and merge the branch or just push develop to remote. 
Do some brief QA'ing and make sure the code all works.
Eventually if/when there is automated testing write tests now
if they don't exist and once passing merge develop to stage.
QA'ing stage shouldn't really matter at the moment since there
is no remote site to deploy to. When there is it will need QA
but for now just merge directly into master to backup the
latest significant work.
