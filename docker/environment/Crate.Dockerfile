# Use an official image that includes code-server
FROM codercom/code-server:latest

# Install JDK 17 for Java support
RUN sudo apt-get update && sudo apt-get install -y openjdk-17-jdk

# Set JAVA_HOME environment variable to JDK 17 path
ENV JAVA_HOME /usr/lib/jvm/java-17-openjdk-amd64
ENV PATH $JAVA_HOME/bin:$PATH

# Install Node.js (LTS version) and npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - \
    && sudo apt-get install -y nodejs

# Install TypeScript globally
RUN sudo npm install -g typescript

# Verify installation by showing Node.js and npm versions
RUN node -v && npm -v && tsc -v

# Install TypeScript, JavaScript, Prettier, Python and Java extensions
RUN code-server --install-extension dbaeumer.vscode-eslint \
    && code-server --install-extension ms-python.python \
    && code-server --install-extension esbenp.prettier-vscode \
    && code-server --install-extension ms-vscode.vscode-typescript-next \
    && code-server --install-extension ms-vscode.vscode-typescript-tslint-plugin \
    && code-server --install-extension redhat.java \
    && code-server --install-extension vscjava.vscode-java-pack \
    && code-server --install-extension vscjava.vscode-java-debug \
    && code-server --install-extension vscjava.vscode-java-test

# Install a dark theme
RUN code-server --install-extension zhuangtongfa.material-theme \
    && code-server --install-extension pkief.material-icon-theme

# Set up VSCode settings to use a dark theme by default
RUN mkdir -p /home/coder/.local/share/code-server/User/ \
    && echo '{ \
      "workbench.colorTheme": "Default Dark+", \
      "workbench.iconTheme": "material-icon-theme" \
    }' > /home/coder/.local/share/code-server/User/settings.json


# Create a workspace directory
RUN mkdir -p /home/coder/workspace

# Expose the port where code-server will run
EXPOSE 8080

# Start code-server when the container starts
CMD ["code-server", "--bind-addr", "0.0.0.0:8080", "/home/coder/workspace", "--auth", "password"]
