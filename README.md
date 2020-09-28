# refactoring-training
## requirements
- Windows10
- Docker Desktop for Windows
- Powershell

## How to work this repository

1. Run `Docker build -t refoctoring .`

2. Run `.\docker.ps1`

    1. If it don't work, Run `Set-ExecutionPolicy RemoteSigned` on Powershell with Administrator.
    2. It is needed to rewrite path to your path.

3. Run `npm init` in docker.

4. Run `yarn add --dev jest` in docker.
