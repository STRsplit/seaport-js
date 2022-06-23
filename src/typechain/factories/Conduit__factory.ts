/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Conduit, ConduitInterface } from "../Conduit";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BadReturnValueFromERC20OnTransfer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
    ],
    name: "ChannelClosed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    name: "ChannelStatusAlreadySet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "identifiers",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "ERC1155BatchTransferGenericFailure",
    type: "error",
  },
  {
    inputs: [],
    name: "Invalid1155BatchTransferEncoding",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidController",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidERC721TransferAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidItemType",
    type: "error",
  },
  {
    inputs: [],
    name: "MissingItemAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "NoContract",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "identifier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenTransferGenericFailure",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "open",
        type: "bool",
      },
    ],
    name: "ChannelUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ConduitItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ConduitTransfer[]",
        name: "transfers",
        type: "tuple[]",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct ConduitBatch1155Transfer[]",
        name: "batchTransfers",
        type: "tuple[]",
      },
    ],
    name: "executeBatch1155",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ConduitItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ConduitTransfer[]",
        name: "standardTransfers",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct ConduitBatch1155Transfer[]",
        name: "batchTransfers",
        type: "tuple[]",
      },
    ],
    name: "executeWithBatch1155",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    name: "updateChannel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5033608052608051610ae1610030600039600061021b0152610ae16000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634ce34aa214610051578063899e104c146100815780638df25d9214610094578063c4e8fcb5146100a7575b600080fd5b61006461005f3660046108bb565b6100bc565b6040516001600160e01b0319909116815260200160405180910390f35b61006461008f366004610942565b61013d565b6100646100a23660046109ae565b6101c5565b6100ba6100b5366004610a00565b610210565b005b3360009081526020819052604081205460ff166100f3576040516349ed56f960e11b81523360048201526024015b60405180910390fd5b8160005b8181101561012c573685858381811061011257610112610a3c565b905060c0020190506101238161030a565b506001016100f7565b50632671a55160e11b949350505050565b3360009081526020819052604081205460ff1661016f576040516349ed56f960e11b81523360048201526024016100ea565b8360005b818110156101a8573687878381811061018e5761018e610a3c565b905060c00201905061019f8161030a565b50600101610173565b506101b38484610476565b50632267841360e21b95945050505050565b3360009081526020819052604081205460ff166101f7576040516349ed56f960e11b81523360048201526024016100ea565b6102018383610476565b506346f92ec960e11b92915050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610259576040516336abb4df60e11b815260040160405180910390fd5b6001600160a01b03821660009081526020819052604090205481151560ff9091161515036102ad576040516349271a0f60e11b81526001600160a01b038316600482015281151560248201526044016100ea565b6001600160a01b03821660008181526020818152604091829020805460ff191685151590811790915591519182527fae63067d43ac07563b7eb8db6595635fc77f1578a2a5ea06ba91b63e2afa37e2910160405180910390a25050565b60016103196020830183610a68565b600381111561032a5761032a610a52565b0361036f5761036c6103426040830160208401610a90565b6103526060840160408501610a90565b6103626080850160608601610a90565b8460a001356105bb565b50565b600261037e6020830183610a68565b600381111561038f5761038f610a52565b036103f6578060a001356001146103b95760405163efcc00b160e01b815260040160405180910390fd5b61036c6103cc6040830160208401610a90565b6103dc6060840160408501610a90565b6103ec6080850160608601610a90565b84608001356106c4565b60036104056020830183610a68565b600381111561041657610416610a52565b0361045d5761036c61042e6040830160208401610a90565b61043e6060840160408501610a90565b61044e6080850160608601610a90565b84608001358560a00135610788565b604051631e4cbc7f60e21b815260040160405180910390fd5b808280631759616b60e11b60205260005b838110156105ae578235820160208401935060806020820160243760a0810135604081026040018060a00160a45260008160c401528060c4018160a0850160c4376020830260c00191508160808501351460a06060860135141682850135841416159250821561050257633ae8821360e21b60005260046000fd5b923592833b61052057632f8aeb3960e11b6000528360045260246000fd5b6000808260206000885af192508261059f573d1561057d576020601f3d0104915060208104826003028184111561056557818403600302610200838002868002030401015b5a60208201101561057a573d6000803e3d6000fd5b50505b6357e222f160e11b6000528360045260c0606452608451602001608452806000fd5b50505050600181019050610487565b5050505060806040525050565b6040516323b872dd60e01b600052836004528260245281604452602060006064600080895af1803d15601f3d116001600051141617163d151581166106b45780873b1515166106b4578061069f578161067e573d15610658576020601f3d010460208404816003028183111561063f57818303600302610200838002858002030401015b5a602082011015610654573d6000803e3d6000fd5b5050505b63f486bc8760e01b60005286600452856024528460445260006064528360845260a46000fd5b639889192360e01b6000528660045285602452846044528360645260846000fd5b632f8aeb3960e11b6000528660045260246000fd5b5050604052505060006060525050565b833b6106df57632f8aeb3960e11b6000528360045260246000fd5b6040516323b872dd60e01b6000528360045282602452816044526000806064600080895af180610779573d15610753576020601f3d010460208304816003028183111561073a57818303600302610200838002858002030401015b5a60208201101561074f573d6000803e3d6000fd5b5050505b63f486bc8760e01b60005285600452846024528360445282606452600160845260a46000fd5b50604052505060006060525050565b843b6107a357632f8aeb3960e11b6000528460045260246000fd5b60405160805160a05160c051637921219560e11b6000528760045286602452856044528460645260a0608452600060a45260008060c46000808d5af180610853573d1561082e576020601f3d010460208604816003028183111561081557818303600302610200838002858002030401015b5a60208201101561082a573d6000803e3d6000fd5b5050505b63f486bc8760e01b600052896004528860245287604452866064528560845260a46000fd5b5060809290925260a05260c05260405250506000606052505050565b60008083601f84011261088157600080fd5b50813567ffffffffffffffff81111561089957600080fd5b60208301915083602060c0830285010111156108b457600080fd5b9250929050565b600080602083850312156108ce57600080fd5b823567ffffffffffffffff8111156108e557600080fd5b6108f18582860161086f565b90969095509350505050565b60008083601f84011261090f57600080fd5b50813567ffffffffffffffff81111561092757600080fd5b6020830191508360208260051b85010111156108b457600080fd5b6000806000806040858703121561095857600080fd5b843567ffffffffffffffff8082111561097057600080fd5b61097c8883890161086f565b9096509450602087013591508082111561099557600080fd5b506109a2878288016108fd565b95989497509550505050565b600080602083850312156109c157600080fd5b823567ffffffffffffffff8111156109d857600080fd5b6108f1858286016108fd565b80356001600160a01b03811681146109fb57600080fd5b919050565b60008060408385031215610a1357600080fd5b610a1c836109e4565b915060208301358015158114610a3157600080fd5b809150509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b600060208284031215610a7a57600080fd5b813560048110610a8957600080fd5b9392505050565b600060208284031215610aa257600080fd5b610a89826109e456fea264697066735822122049a979b47e77b7cc159d9cdf43c1f605d2a666bac5eef7ee33283931f1df261564736f6c634300080d0033";

type ConduitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConduitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Conduit__factory extends ContractFactory {
  constructor(...args: ConduitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Conduit";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Conduit> {
    return super.deploy(overrides || {}) as Promise<Conduit>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Conduit {
    return super.attach(address) as Conduit;
  }
  connect(signer: Signer): Conduit__factory {
    return super.connect(signer) as Conduit__factory;
  }
  static readonly contractName: "Conduit";
  public readonly contractName: "Conduit";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConduitInterface {
    return new utils.Interface(_abi) as ConduitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Conduit {
    return new Contract(address, _abi, signerOrProvider) as Conduit;
  }
}
