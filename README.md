# Angular 2 Workshop at Fluent Conf

This is a workshop provided by Jeremy Wilken.

To get setup for this workshop, you need to do the following.


## Vagrant

Vagrant is a simple way to setup a VM so that your local development environment is consistent with this project without having to update your local machine. **This is the recommended option, but you MUST SET THIS UP BEFORE THE CONFERENCE.** Setting up Vagrant requires downloading a lot of files, and it probably won't work on conference network.

* Install [VirtualBox](https://www.virtualbox.org/) and [Vagrant](https://vagrantup.com) if you haven't already.
* Clone this repository wherever you wish to run it from `git clone https://github.com/gnomeontherun/angular2-fluent-conf`.
* Navigate to the new folder `cd angular2-fluent-conf`.
* Start the Vagrant VM using `vagrant up`. This can take a few minutes the first time you use Vagrant because it has to download OS images. It will also mount the local files into the VM as a shared drive.
* There may be some red messages, those are usually just NPM warnings that aren't real errors.
* Log into the VM `vagrant ssh`. This gives you shell access to the environment.
* Run `ng serve` and when it is ready access the sample at `http://localhost:4200`.
* If you see the application up and running, you're good to go. 

## Alternative

If you are unable to use Vagrant, or are in a pinch and cannot download the large files it requires, you can do the following.

* Ensure you have [NodeJS](https://nodejs.org/download) installed, this was built using Node 5.6. If you aren't running 5.6 or greater, you should use [NVM](https://github.com/creationix/nvm) to install 5.6.
  * If you use NVM, once it is installed you can run `nvm install 5.6 && nvm use 5.6` to get started. Anytime you start a new terminal for this project, you'll need to run `nvm use 5.6` to change the default version.
* Clone this repository wherever you wish to run it from `git clone https://github.com/gnomeontherun/angular2-fluent-conf`.
* Navigate to the new folder `cd angular2-fluent-conf`.
* Run `npm install` to get all dependencies setup.
* Install the Angular CLI `npm install -g angular-cli@0.0.23`. Ensure it is the same version, so it matches the assets in this project.
* Run `ng serve` and when it is ready access the sample at `http://localhost:4200`.
* If you see the application up and running, you're good to go.
