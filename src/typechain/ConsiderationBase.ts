/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, BigNumberish, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type SpentItemStruct = {
  itemType: BigNumberish;
  token: string;
  identifier: BigNumberish;
  amount: BigNumberish;
};

export type SpentItemStructOutput = [number, string, BigNumber, BigNumber] & {
  itemType: number;
  token: string;
  identifier: BigNumber;
  amount: BigNumber;
};

export type ReceivedItemStruct = {
  itemType: BigNumberish;
  token: string;
  identifier: BigNumberish;
  amount: BigNumberish;
  recipient: string;
};

export type ReceivedItemStructOutput = [
  number,
  string,
  BigNumber,
  BigNumber,
  string
] & {
  itemType: number;
  token: string;
  identifier: BigNumber;
  amount: BigNumber;
  recipient: string;
};

export interface ConsiderationBaseInterface extends utils.Interface {
  contractName: "ConsiderationBase";
  functions: {};

  events: {
    "CounterIncremented(uint256,address)": EventFragment;
    "OrderCancelled(bytes32,address,address)": EventFragment;
    "OrderFulfilled(bytes32,address,address,address,tuple[],tuple[])": EventFragment;
    "OrderValidated(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CounterIncremented"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderValidated"): EventFragment;
}

export type CounterIncrementedEvent = TypedEvent<
  [BigNumber, string],
  { newCounter: BigNumber; offerer: string }
>;

export type CounterIncrementedEventFilter =
  TypedEventFilter<CounterIncrementedEvent>;

export type OrderCancelledEvent = TypedEvent<
  [string, string, string],
  { orderHash: string; offerer: string; zone: string }
>;

export type OrderCancelledEventFilter = TypedEventFilter<OrderCancelledEvent>;

export type OrderFulfilledEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    SpentItemStructOutput[],
    ReceivedItemStructOutput[]
  ],
  {
    orderHash: string;
    offerer: string;
    zone: string;
    recipient: string;
    offer: SpentItemStructOutput[];
    consideration: ReceivedItemStructOutput[];
  }
>;

export type OrderFulfilledEventFilter = TypedEventFilter<OrderFulfilledEvent>;

export type OrderValidatedEvent = TypedEvent<
  [string, string, string],
  { orderHash: string; offerer: string; zone: string }
>;

export type OrderValidatedEventFilter = TypedEventFilter<OrderValidatedEvent>;

export interface ConsiderationBase extends BaseContract {
  contractName: "ConsiderationBase";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConsiderationBaseInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "CounterIncremented(uint256,address)"(
      newCounter?: null,
      offerer?: string | null
    ): CounterIncrementedEventFilter;
    CounterIncremented(
      newCounter?: null,
      offerer?: string | null
    ): CounterIncrementedEventFilter;

    "OrderCancelled(bytes32,address,address)"(
      orderHash?: null,
      offerer?: string | null,
      zone?: string | null
    ): OrderCancelledEventFilter;
    OrderCancelled(
      orderHash?: null,
      offerer?: string | null,
      zone?: string | null
    ): OrderCancelledEventFilter;

    "OrderFulfilled(bytes32,address,address,address,tuple[],tuple[])"(
      orderHash?: null,
      offerer?: string | null,
      zone?: string | null,
      recipient?: null,
      offer?: null,
      consideration?: null
    ): OrderFulfilledEventFilter;
    OrderFulfilled(
      orderHash?: null,
      offerer?: string | null,
      zone?: string | null,
      recipient?: null,
      offer?: null,
      consideration?: null
    ): OrderFulfilledEventFilter;

    "OrderValidated(bytes32,address,address)"(
      orderHash?: null,
      offerer?: string | null,
      zone?: string | null
    ): OrderValidatedEventFilter;
    OrderValidated(
      orderHash?: null,
      offerer?: string | null,
      zone?: string | null
    ): OrderValidatedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
