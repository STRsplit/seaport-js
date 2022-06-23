/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ConduitControllerInterface,
  ConduitControllerInterfaceInterface,
} from "../ConduitControllerInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "CallerIsNotNewPotentialOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "CallerIsNotOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "ChannelOutOfRange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "ConduitAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCreator",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
      {
        internalType: "address",
        name: "newPotentialOwner",
        type: "address",
      },
    ],
    name: "NewPotentialOwnerAlreadySet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "NewPotentialOwnerIsZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NoConduit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "NoPotentialOwnerCurrentlySet",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "conduit",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "conduitKey",
        type: "bytes32",
      },
    ],
    name: "NewConduit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "conduit",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPotentialOwner",
        type: "address",
      },
    ],
    name: "PotentialOwnerUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "cancelOwnershipTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "conduitKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    name: "createConduit",
    outputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "channelIndex",
        type: "uint256",
      },
    ],
    name: "getChannel",
    outputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
    ],
    name: "getChannelStatus",
    outputs: [
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "getChannels",
    outputs: [
      {
        internalType: "address[]",
        name: "channels",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "conduitKey",
        type: "bytes32",
      },
    ],
    name: "getConduit",
    outputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getConduitCodeHashes",
    outputs: [
      {
        internalType: "bytes32",
        name: "creationCodeHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "runtimeCodeHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "getKey",
    outputs: [
      {
        internalType: "bytes32",
        name: "conduitKey",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "getPotentialOwner",
    outputs: [
      {
        internalType: "address",
        name: "potentialOwner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "getTotalChannels",
    outputs: [
      {
        internalType: "uint256",
        name: "totalChannels",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
      {
        internalType: "address",
        name: "newPotentialOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
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

export class ConduitControllerInterface__factory {
  static readonly abi = _abi;
  static createInterface(): ConduitControllerInterfaceInterface {
    return new utils.Interface(_abi) as ConduitControllerInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConduitControllerInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConduitControllerInterface;
  }
}
