# FundPoint

## Blockchain-Based Crowdfunding Web App

FundPoint is a blockchain-based crowdfunding web application that allows users to start campaigns or donate to ongoing campaigns using Ethereum. The frontend is built with React and Vite, while the backend utilizes Ethereum and Solidity for smart contracts. MetaMask is integrated for secure transactions, and Thirdweb is used for deploying the smart contract.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Testing](#testing)
- [Deployment](#deployment)
- [Usage](#usage)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features

- **Start a Campaign:** Users can initiate a new crowdfunding campaign by providing details like the campaign title, description, goal amount, and deadline.
- **Donate to a Campaign:** Users can browse ongoing campaigns and donate Ethereum directly using MetaMask.
- **Secure Transactions:** All transactions are handled through the Ethereum blockchain, ensuring security and transparency.
- **MetaMask Integration:** Seamless connection to MetaMask for managing accounts and conducting transactions.
- **Thirdweb Integration:** Smart contracts are deployed using Thirdweb, making deployment easy and reliable.

## Tech Stack

- **Frontend:** React, Vite
- **Backend:** Solidity, Ethereum
- **Blockchain:** Ethereum
- **Tools:** MetaMask, Thirdweb

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/dakshbamola/FundPoint
   cd FundPoint
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your environment variables. Example:
   ```bash
   PRIVATE_KEY = "Private key for thirdweb api"
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   This will start the application in development mode. You can view it in your browser at `http://localhost:3000`.

## Testing

The app uses Sepolia test ETH for testing. Ensure your MetaMask is connected to the Sepolia test network, and you have some test ETH.

## Deployment

To deploy the smart contract, we use the Thirdweb CLI. Follow these steps:

1. **Install the Thirdweb CLI**
   If you haven't already, install the Thirdweb CLI globally on your system:
   ```bash
   npm install -g @thirdweb-dev/cli
   ```

2. **Deploy the Smart Contract**
   Use the Thirdweb CLI to deploy your smart contract:
   ```bash
   thirdweb deploy
   ```
   Follow the prompts in the CLI to configure and deploy your smart contract.

3. **Update the Contract Address**
   After deployment, update your contract address in context of the application code .

4. **Verify Deployment**
   Ensure that your smart contract is successfully deployed and accessible on the blockchain network you're using.

## Usage

- **Starting a Campaign:** Connect your MetaMask wallet, navigate to the "Start Campaign" section, fill in the details, and launch your campaign.
- **Donating to a Campaign:** Browse the available campaigns, select one, and donate using Ethereum through MetaMask.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Acknowledgements

- [MetaMask](https://metamask.io/)
- [Thirdweb](https://thirdweb.com/)
- [Ethereum](https://ethereum.org/)
- [Vite](https://vitejs.dev/)
