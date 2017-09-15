### README

Rails 5.1.1
Ruby  2.3.0

### App Description

Simple CRUD API written in Rails with React
The end goal is to have a simple D&D 5th Edition
character creation and csv/pdf download tool.

### Workflow and Branches

There are currently three branches in the dev process
  - master , this will someday be the true production
    branch when there is somewhere to put it live.  Until
    then this will serve as the most stable branch
    separated by tagged versions. Develop initially branches
    from here if a critical bug forces things back to a
    previous version .
  - stage , this is intended to act as a QA branch
    but is currently the only branch getting deployed
    live so it's a de facto 'production' since I only
    have one EC2 instance. Merges into master.
  - develop , volatile branch where all new changes
    managed and merged together. Merges into stage.

In a perfect world when a new planned version begins
develop is rebased from master so they have the same code
initially. Changes are made and tested on develop and then
pushed to the stage branch and deployed staging server where
they get tested again and after whatever amount of testing
is seen as necessary get merged into master which is then
tagged as the latest stable build before the process begins
again. Realistically there will be inconsistencies in the
process, but it's something to aim for at least.

### Troubleshooting Passenger Deployment

One issue that occurred during installation was the Sqlite3 gem
not loading properly for passenger after nginx was properly configured.
To debug what was happening, the following command was used

  tail -f /var/log/nginx/error.log

Basically there was a message detailing that Sqlite3 was incompatible
for some reason. To fix it the .bundle directory was deleted and then bundle
was run again to reinstall everything.

  rm -r .bundle
  bundle install

### RVM Multi-User Install

The deployment user for the app is 'passenger' and to keep things
simple RVM is used to manage Ruby for that user. To install RVM
for multiple users use the below command.

  curl -L https://get.rvm.io | sudo bash -s stable

Next add the users you want with the next command.
  
  sudo usermod -a -G rvm <user>

When you it comes time to deploy the app ensure the proper version
of ruby is being used with 'rvm list'

### Nginx and Passenger Installation

This guide was used to get pasenger and nginx installed:
  https://www.phusionpassenger.com/library/install/nginx/install/oss/trusty/

It's important to pay attention to what version of Ubuntu (or whatever the server
is running) is being used. The guide assumes Ubuntu 14.04, for Ubuntu 16.04 use
the command below when adding the Passenger APT repository

sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

If 'sudo service nginx restart' is throwing errors, run
'sudo nginx' to see a log print out of what is going wrong.
If the port is already being used run 'sudo netstat -tulpn'
and look for the service using that port and get it's PID.
Run kill -9 on that PID and then try restarting NGINX again.

If you run into issues with Passenger you can validate it's
installation with 'sudo /usr/bin/passenger-config validate-install'
to validate that Nginx is attached to a process run
'sudo /usr/sbin/passenger-memory-stats'

To keep Passenger and Nginx up to date routinely run
  sudo apt-get update
  sudo apt-get upgrade

The guide used for the initial deployment of the app is here:
  https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/deploy_app.html

