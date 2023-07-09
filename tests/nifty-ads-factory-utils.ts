import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  NewAdBanner,
  OwnershipTransferred,
  TokenBannerURIUpdated,
  TokenDestinationURIUpdated,
  TokenFeeNumeratorUpdated,
  TokenHostURIUpdated,
  TokenNoFollowUpdated,
  TokenPriceUpdated,
  TokenTermsURIUpdated,
  Transfer
} from "../generated/NiftyAdsFactory/NiftyAdsFactory"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createNewAdBannerEvent(
  nift_ad_id: BigInt,
  host_url: string,
  destination_url: string,
  banner_media_url: string,
  terms_url: string,
  sale_price: BigInt,
  feeNumerator: BigInt,
  noFollow: boolean
): NewAdBanner {
  let newAdBannerEvent = changetype<NewAdBanner>(newMockEvent())

  newAdBannerEvent.parameters = new Array()

  newAdBannerEvent.parameters.push(
    new ethereum.EventParam(
      "nift_ad_id",
      ethereum.Value.fromUnsignedBigInt(nift_ad_id)
    )
  )
  newAdBannerEvent.parameters.push(
    new ethereum.EventParam("host_url", ethereum.Value.fromString(host_url))
  )
  newAdBannerEvent.parameters.push(
    new ethereum.EventParam(
      "destination_url",
      ethereum.Value.fromString(destination_url)
    )
  )
  newAdBannerEvent.parameters.push(
    new ethereum.EventParam(
      "banner_media_url",
      ethereum.Value.fromString(banner_media_url)
    )
  )
  newAdBannerEvent.parameters.push(
    new ethereum.EventParam("terms_url", ethereum.Value.fromString(terms_url))
  )
  newAdBannerEvent.parameters.push(
    new ethereum.EventParam(
      "sale_price",
      ethereum.Value.fromUnsignedBigInt(sale_price)
    )
  )
  newAdBannerEvent.parameters.push(
    new ethereum.EventParam(
      "feeNumerator",
      ethereum.Value.fromUnsignedBigInt(feeNumerator)
    )
  )
  newAdBannerEvent.parameters.push(
    new ethereum.EventParam("noFollow", ethereum.Value.fromBoolean(noFollow))
  )

  return newAdBannerEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTokenBannerURIUpdatedEvent(
  _tokenId: BigInt,
  _newURI: string
): TokenBannerURIUpdated {
  let tokenBannerUriUpdatedEvent = changetype<TokenBannerURIUpdated>(
    newMockEvent()
  )

  tokenBannerUriUpdatedEvent.parameters = new Array()

  tokenBannerUriUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  tokenBannerUriUpdatedEvent.parameters.push(
    new ethereum.EventParam("_newURI", ethereum.Value.fromString(_newURI))
  )

  return tokenBannerUriUpdatedEvent
}

export function createTokenDestinationURIUpdatedEvent(
  _tokenId: BigInt,
  _newURI: string
): TokenDestinationURIUpdated {
  let tokenDestinationUriUpdatedEvent = changetype<TokenDestinationURIUpdated>(
    newMockEvent()
  )

  tokenDestinationUriUpdatedEvent.parameters = new Array()

  tokenDestinationUriUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  tokenDestinationUriUpdatedEvent.parameters.push(
    new ethereum.EventParam("_newURI", ethereum.Value.fromString(_newURI))
  )

  return tokenDestinationUriUpdatedEvent
}

export function createTokenFeeNumeratorUpdatedEvent(
  _tokenId: BigInt,
  _feeNumerator: BigInt
): TokenFeeNumeratorUpdated {
  let tokenFeeNumeratorUpdatedEvent = changetype<TokenFeeNumeratorUpdated>(
    newMockEvent()
  )

  tokenFeeNumeratorUpdatedEvent.parameters = new Array()

  tokenFeeNumeratorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  tokenFeeNumeratorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_feeNumerator",
      ethereum.Value.fromUnsignedBigInt(_feeNumerator)
    )
  )

  return tokenFeeNumeratorUpdatedEvent
}

export function createTokenHostURIUpdatedEvent(
  _tokenId: BigInt,
  _newURI: string
): TokenHostURIUpdated {
  let tokenHostUriUpdatedEvent = changetype<TokenHostURIUpdated>(newMockEvent())

  tokenHostUriUpdatedEvent.parameters = new Array()

  tokenHostUriUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  tokenHostUriUpdatedEvent.parameters.push(
    new ethereum.EventParam("_newURI", ethereum.Value.fromString(_newURI))
  )

  return tokenHostUriUpdatedEvent
}

export function createTokenNoFollowUpdatedEvent(
  _tokenId: BigInt,
  _nofollow: boolean
): TokenNoFollowUpdated {
  let tokenNoFollowUpdatedEvent = changetype<TokenNoFollowUpdated>(
    newMockEvent()
  )

  tokenNoFollowUpdatedEvent.parameters = new Array()

  tokenNoFollowUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  tokenNoFollowUpdatedEvent.parameters.push(
    new ethereum.EventParam("_nofollow", ethereum.Value.fromBoolean(_nofollow))
  )

  return tokenNoFollowUpdatedEvent
}

export function createTokenPriceUpdatedEvent(
  _tokenId: BigInt,
  _newPrice: BigInt
): TokenPriceUpdated {
  let tokenPriceUpdatedEvent = changetype<TokenPriceUpdated>(newMockEvent())

  tokenPriceUpdatedEvent.parameters = new Array()

  tokenPriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  tokenPriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_newPrice",
      ethereum.Value.fromUnsignedBigInt(_newPrice)
    )
  )

  return tokenPriceUpdatedEvent
}

export function createTokenTermsURIUpdatedEvent(
  _tokenId: BigInt,
  _newURI: string
): TokenTermsURIUpdated {
  let tokenTermsUriUpdatedEvent = changetype<TokenTermsURIUpdated>(
    newMockEvent()
  )

  tokenTermsUriUpdatedEvent.parameters = new Array()

  tokenTermsUriUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  tokenTermsUriUpdatedEvent.parameters.push(
    new ethereum.EventParam("_newURI", ethereum.Value.fromString(_newURI))
  )

  return tokenTermsUriUpdatedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
