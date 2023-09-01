 # Use a Node base image
 FROM node:20

 # Set the working directory in the Docker image
 WORKDIR /app

 # Copy package.json and package-lock.json for efficient caching
 COPY package*.json ./

 COPY . .

 # Install dependencies
 RUN npm ci && npm run build

 # Copy the rest of the application


 # Build the project (this will also build TailwindCSS, DaisyUI, etc.)
#  RUN npm run build

 # Expose port 5000 for SvelteKit
 EXPOSE 3000

 # Start the app
# CMD ["npm", "run", "preview"]
CMD ["node", "build"]
