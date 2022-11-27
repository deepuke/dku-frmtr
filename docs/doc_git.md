# Git

## Add locally created project to git remote

- In the command line, navigate to the root directory of your project.
- Initialize the local directory as a Git repository.
  ```sh
    $ git init -b main
  ```
- Stage and commit all the files in your project.
  ```sh
    $ git add . && git commit -m "initial commit"`
  ```
- In Terminal, add the URL for the remote repository where your local repository will be pushed.
  ```sh
    $ git remote add origin <REMOTE_URL>
    # Sets the new remote
    $ git remote -v
    # Verifies the new remote URL
  ```
- Push the changes in your local repository to GitHub.com.
  ```sh
    $ git push -u origin main
    # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```
