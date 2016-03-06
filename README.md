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
* Then run `npm install` to download the dependencies for the project. (If you already ran `npm install` from outside of the Vagrant shell, first run `rm -rf node_modules` to delete the existing directory. Some modules won't work correctly if they are installed on a different host platform.)
* Run `ng serve` and when it is ready access the sample at `http://localhost:4200`.
* If you see the application up and running, you're good to go. 

#### Possible troubleshooting

* There are a lot of warnings and even some errors that happen due to NPM being noisy, you can usually ignore those. When installing with Vagrant, they look even more ominous in red, but . As long as `ng serve` runs, you're setup is ok.
* Possibly your port mappings will be different if the port is not available. When `ng serve` begins it outputs the ports for both the server and the live reload, so you can update those ports in the Vagrantfile, exit the Vagrant ssh session if you are in it, run `vagrant reload`, and then `vagrant up` to reset the ports.

## Plunkr

The entire app is also available online as a Plunkr. You can find the finished version here http://plnkr.co/edit/xQVb69m90anycp7jUh2A?p=preview.

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
