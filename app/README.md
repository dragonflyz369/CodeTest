# Project

## Steps taken to create app
- npx create-react-app nist-app
- npm install
- npm install -D tailwindcss
- npx tailwindcss init
- Converted some of the basic ReactJS styles/classes to tailwinds to make sure configured correctly
- Added Material UI (npm install @mui/material @emotion/react @emotion/styled)
- Added Roboto font (npm install @fontsource/roboto)

## Steps taken to create API 
- dotnet new web -o NistApi
- dotnet dev-certs https --trust
- dotnet add package Microsoft.EntityFrameworkCore.InMemory
- dotnet add package Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore
__Followed steps here: https://learn.microsoft.com/en-us/aspnet/core/tutorials/min-web-api?view=aspnetcore-7.0&tabs=visual-studio-code__
- dotnet run 