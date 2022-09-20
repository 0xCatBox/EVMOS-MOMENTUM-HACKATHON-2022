<img width="100%" alt="스크린샷 2022-09-20 오후 7 10 46" src="https://user-images.githubusercontent.com/66289619/191286927-1b851426-f511-4d53-a144-dd3919382ecc.png">

# EVMOS-MOMENTUM-HACKATHON-2022

## Metaverse(Roblox) ERC20 & ERC721 minting structure

### Demo Youtube Link

 - https://www.youtube.com/watch?v=GupMPjmn-24
 
***
## Inspiration
This project is the cornerstone of a cross-platform that can exchange, share, and create blockchain-based digital goods in Metaverse. We think that this can greatly activate the bridge role that evmos plays in cosmos. Facilitating many digital goods transactions through p2e in cross-platform metaverse, I have no doubt that evmos can contribute to the expansion of cosmos layer0 in the future. Evmos will be abbreviated as everything + cosmos in the future.

***
## What it does
Our result **allows players to minting ERC20 and ERC721 tokens within Roblox.** The owner of the issued token is the player who performed the minting. The minting process is as follows.
  - The player visits the token issuer located in the map.
  - The player speaks to the minting NPC at the token issuer.
  - The NPC requests information necessary for minting, and the player inputs the required information.
  - When input is complete, the player clicks the Mint button.
  - After a while, the minted token hash value and contract address are displayed.

***
## How we built it

### Contract Deployment
We used **VSCode, Nods.js, Express.js, etc. to minting tokens based on the minting information we received from Roblox Studio.** You can mint a new token only when the server is on. If minting is successful, the transaction hash and contract address are returned.
  - VSCode: https://code.visualstudio.com/
  - Node.js: https://nodejs.org/en/
  - Express.js: https://expressjs.com/

### Metaverse(Roblox)
We constructed a map through **Roblox Studio** and placed objects and NPCs. We post information necessary for minting by connecting to the contract deployment server through an http request on the Roblox game. And, the transaction hash and contract address, which are the result values of the post, are returned.
  - Roblox Studio: https://www.roblox.com/Create

***
## Challenges we ran into

### About EVMOS
When we were unfamiliar with EVMOS, we were concerned about adapting to the new environment. However, when we looked at the docs and experienced the EVMOS environment, we felt that there was no difference at all compared to the experience using the EVM.

### About Metaverse(Roblox)
Redirection was sometimes difficult due to some Roblox policies, and finding a way to solve this was one of our challenges. Since we were new to the Roblox environment, it took some time to get used to Roblox Studio and the Lua language.

***
## Accomplishments that we're proud of
We are proud that we succeeded in the new challenge of minting ERC20 and ERC721 in the new environment of EVMOS and metaverse. Roblox is one of the existing metaverses with a high degree of freedom. However, several policies, such as security and impact on players, are hampering the pace of this world's expansion. In this environment, we were able to test the new scalability of EVMOS without violating the game's policy, and we were able to prove that EVMOS is capable of new extensions through the existing metaverse without relying on content within the chain network. This is our achievement.

***
## What we learned
With the exception of blockchain technologies, there were many things that were new to us. It was also the first time to access the **EVMOS** blockchain network, use the **Roblox** metaverse, and connect it to Roblox. As there were a lot of things we were doing for the first time, we were able to learn new things through this hackathon, and we were able to receive many different ideas and inspirations.

***
## What's next for Roblox ERC20 & ERC721 minting structure
We confirmed that users can minting various tokens on the Metaverse through the results of this hackathon. Our next step is to improve our results and then make it possible for users to use the issued tokens in their respective worlds. Since the information about the tokens issued by users resides on the chain, this means that users can use the tokens issued on other platforms if appropriate connections are made on other platforms. We intend to greatly expand this boundary and develop it in the form of Cross-Metaverse or Cross-World. There will be no boundaries to its use. The places where we use these tokens can be games, virtual worlds, or even real worlds. It depends on the location and circumstances, but in some places, metaverse and blockchain technology are already being used more and more in reality. In this context, the outcomes we propose will accelerate the penetration of metaverse and blockchain technology into our reality.

***
## How to run

### 0. Things to prepare in advance

If you have not downloaded the Roblox map, first download the Roblox map from the link below.

 - https://www.roblox.com/games/10957234853/0xCatbox-Metaverse-Minting-Structure
 
Change the name `.env.example` to `.env` and write the necessary information inside to run the program.

### 1. Server run

Execute the command below where the `package.json` file is located.

`npm i`

When the package installation is complete, run the following command.

`node server.js`

The above command will run the server, and the default port is set to 5000.

If you can see the message `Listen 5000` in the console, the server is running normally.

After running the server, let's run Roblox.

### 2. Roblox run

Please run the downloaded map.

If you want to minting ERC20 tokens, visit the **FT MINTING** building below.
<img width="50%" alt="image" src="https://user-images.githubusercontent.com/66289619/191228351-6f2b2e87-bd27-4a42-ba55-4448a9df6e91.png">

**Click on one of the clerks inside the building** and they will help you with ERC20 minting.
<img width="50%" alt="image" src="https://user-images.githubusercontent.com/66289619/191234892-e11932ef-61a2-40a8-9267-fb6b0589a0c3.png">

If you want to minting ERC721 tokens, visit the **NFT MINTING** building below.
<img width="50%" alt="image" src="https://user-images.githubusercontent.com/66289619/191229094-2e1eac36-b00b-4031-87d1-3a739cafdd6b.png">

**Click on one of the clerks inside the building** and they will help you with ERC721 minting.
<img width="50%" alt="image" src="https://user-images.githubusercontent.com/66289619/191328063-0be15fff-9df3-4e9f-b5c7-885a24a463d9.png">

### 3. Check minted token

You can check the information of tokens issued through `Minterscan`.

You can find it on minterscan via the transaction hash value of the token you minted.

 - https://testnet.mintscan.io/evmos-testnet

