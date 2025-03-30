  EXAM 3.0 - README

EXAM 3.0 - Secure Exam Management System
========================================

**EXAM 3.0** is a decentralized, secure, and transparent platform for managing exams. The system ensures exam papers are securely stored on IPFS using the Pinata cloud service and deployed on a private blockchain (using Hardhat). The system automates exam paper access at scheduled times in exam centers using a client application, and candidates can register through the website.

Table of Contents
-----------------

1.  [Project Overview](#project-overview)
2.  [Tech Stack](#tech-stack)
3.  [Features](#features)
4.  [Installation](#installation)
5.  [Smart Contract Deployment](#smart-contract-deployment)
6.  [Frontend Setup](#frontend-setup)
7.  [IPFS and Pinata Integration](#ipfs-and-pinata-integration)


Project Overview
----------------

**EXAM 3.0** aims to provide an end-to-end secure exam system:

*   Exam papers are uploaded by the admin and stored in IPFS.
*   Papers are revealed only at the scheduled exam time.
*   The system supports user registration through the website (built with React and Next.js) and WordPress integration.
*   Exam details, such as the time, center, and other information, are stored in MySQL and accessible via a user portal.

Tech Stack
----------

*   **Blockchain Framework**: Hardhat (Local Private Blockchain)
*   **Frontend**: React.js, Next.js
*   **Smart Contracts**: Solidity
*   **Blockchain Interaction**: Ethers.js
*   **Storage**: IPFS via Pinata Cloud Service
*   **Database**: MySQL
*   **CMS Integration**: WordPress

Features
--------

1.  **Decentralized Exam Paper Storage**: Exam papers are securely uploaded and stored on IPFS, ensuring tamper-proof exam distribution.
2.  **Time-based Exam Paper Reveal**: Papers are automatically displayed to candidates at the scheduled time.
3.  **User Registration**: Users can register through the website and WordPress, providing their public address for exam access.
4.  **Exam Information Portal**: Candidates can view their exam details (exam center, timing, etc.) via the portal.
5.  **Client Software for Exam Centers**: Custom client software will automatically display exam papers at exam centers.

Installation
------------

Follow these steps to set up the project on your local machine.

### Prerequisites

Ensure you have the following installed:

*   [Node.js](https://nodejs.org/)
*   [Hardhat](https://hardhat.org/)
*   [MySQL](https://www.mysql.com/)
*   [Pinata Account](https://www.pinata.cloud/)

### 1\. Clone the Repository

   git clone https://github.com/Rishi2330/Ace_Hack_4.0
    

### 2\. Install Dependencies

    npm install

Smart Contract Deployment
-------------------------

### 1\. Hardhat Setup

Run the following command to start the Hardhat local blockchain:

    npx hardhat node

### 2\. Deploy Contracts

In another terminal, deploy the contracts:

    npx hardhat run scripts/deploy.js --network localhost

### 3\. View Deployed Contract

You can view the deployed contract address in the `./scripts/deploy.js` file and interact with the contract using `ethers.js`.

Frontend Setup
--------------

1\. **React and Next.js Configuration**: The frontend is built using Next.js to ensure SEO optimization and server-side rendering. Customize the user experience by updating the components in the `./pages` directory.

2\. Run the Frontend:

    npm run dev

The application will run on `http://localhost:3000`.

### User Portal

Users can log in, register, and view their exam-related information on the portal. The portal fetches data from MySQL using a REST API.

**Screenshot**: User Portal displaying exam details

IPFS and Pinata Integration
---------------------------

### 1\. Setup Pinata API

*   Create an account on [Pinata](https://www.pinata.cloud/).
*   Get your **API Key** and **Secret Key** from the Pinata dashboard.
*   Update the `.env` file with the Pinata keys:

    PINATA_API_KEY=your_pinata_api_key
    PINATA_SECRET_API_KEY=your_pinata_secret_key
    

### 2\. Upload Exam Papers to IPFS

Admins can upload exam papers via the admin panel, which will automatically pin the files to IPFS using the Pinata cloud service.



# Decentralized Image Upload and Sharing

This project facilitates decentralized image upload and sharing on the blockchain using Solidity for the smart contract and React for the front-end interface. It enables users to securely upload images to IPFS (InterPlanetary File System) and share access with specified users through smart contract functionality.

Here is the video in English - [Decentralize Google Drive](https://youtu.be/M-KRLlHG_zs?si=rD7I-fH-P8kGiwwf)

Here is the video in Hindi - [Decentralize Google Drive](https://youtu.be/fghqq3-P3x0?si=CVMpHFTW3-fa3R3A)

## Features

- **Decentralized Storage:** Images are uploaded to IPFS, ensuring decentralized and immutable storage.
- **Smart Contract:** Utilizes Solidity smart contracts on the Ethereum blockchain for access control and ownership management.
- **Access Control:** Users can grant or revoke access to their uploaded images to specific individuals through the smart contract.

## Technologies Used

- **Solidity:** Smart contract development for ownership and access control.
- **React:** Front-end interface for uploading images and managing access.
- **IPFS:** Decentralized storage protocol for hosting uploaded images.

## Usage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/decentralized-image-upload.git
   ```
2. Install dependencies for the hardhat:

   ```bash
   # Navigate to the root directory
   cd Dgdrive3.0
   # Install hardhat dependencies
   npm install
   ```
3. Compile the smart contract for artifacts:

   ```bash
   # Compile Smart Contract
   npx hardhat compile
   ```
4. Deploy the Solidity smart contract to an Ethereum testnet or local development environment.
   ```bash
   # Deploy Smart Contract
   npx hardhat run scripts/deploy.js --network <network-name>
   ```
5. Install dependencies for the React front end:
   ```bash
   # Navigate to the React client directory
   cd client 
   # Install React dependencies
   npm install
   ```
6. Run the react application:
   ```bash
   # Start React Application
   npm start
   ```
   
### Configuration

1. Set up environment variables:

   - Obtain API keys for Pinata to interact with IPFS.
   - Update the React component (FileUpload.js) with your Pinata API keys.
     
### Usage

Once the setup and configuration are complete, follow these steps to utilize the decentralized image upload and sharing system:

1. **Install Metamask:**
   - Ensure Metamask is installed and configured in your browser for Ethereum interactions.

2. **Update Contract Address:**
   - After smart contract deployment, make sure to update the contract address in `App.js` within the React application.

3. **Upload Image before "Get Data":**
   - Click "Get Data" only after uploading an image on Pinata. Otherwise, it will throw an error stating "You don't have access".

4. **Accessing Other User Images:**
   - Use the "Get Data" button to access other users' images. Input the user's address in the designated box, but remember, you can only access their images if they've granted you access through the smart contract. Otherwise, it will throw an error saying "You don't have access".

These steps will ensure smooth navigation and utilization of the system while maintaining access control and avoiding potential errors.

