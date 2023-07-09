import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  NewAdBanner as NewAdBannerEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TokenBannerURIUpdated as TokenBannerURIUpdatedEvent,
  TokenDestinationURIUpdated as TokenDestinationURIUpdatedEvent,
  TokenFeeNumeratorUpdated as TokenFeeNumeratorUpdatedEvent,
  TokenHostURIUpdated as TokenHostURIUpdatedEvent,
  TokenNoFollowUpdated as TokenNoFollowUpdatedEvent,
  TokenPriceUpdated as TokenPriceUpdatedEvent,
  TokenTermsURIUpdated as TokenTermsURIUpdatedEvent,
  Transfer as TransferEvent
} from "../generated/NiftyAdsFactory/NiftyAdsFactory"
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
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewAdBanner(event: NewAdBannerEvent): void {
  let entity = new NewAdBanner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nift_ad_id = event.params.nift_ad_id
  entity.host_url = event.params.host_url
  entity.destination_url = event.params.destination_url
  entity.banner_media_url = event.params.banner_media_url
  entity.terms_url = event.params.terms_url
  entity.sale_price = event.params.sale_price
  entity.feeNumerator = event.params.feeNumerator
  entity.noFollow = event.params.noFollow

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenBannerURIUpdated(
  event: TokenBannerURIUpdatedEvent
): void {
  let entity = new TokenBannerURIUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenId = event.params._tokenId
  entity._newURI = event.params._newURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenDestinationURIUpdated(
  event: TokenDestinationURIUpdatedEvent
): void {
  let entity = new TokenDestinationURIUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenId = event.params._tokenId
  entity._newURI = event.params._newURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenFeeNumeratorUpdated(
  event: TokenFeeNumeratorUpdatedEvent
): void {
  let entity = new TokenFeeNumeratorUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenId = event.params._tokenId
  entity._feeNumerator = event.params._feeNumerator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenHostURIUpdated(
  event: TokenHostURIUpdatedEvent
): void {
  let entity = new TokenHostURIUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenId = event.params._tokenId
  entity._newURI = event.params._newURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenNoFollowUpdated(
  event: TokenNoFollowUpdatedEvent
): void {
  let entity = new TokenNoFollowUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenId = event.params._tokenId
  entity._nofollow = event.params._nofollow

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenPriceUpdated(event: TokenPriceUpdatedEvent): void {
  let entity = new TokenPriceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenId = event.params._tokenId
  entity._newPrice = event.params._newPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenTermsURIUpdated(
  event: TokenTermsURIUpdatedEvent
): void {
  let entity = new TokenTermsURIUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenId = event.params._tokenId
  entity._newURI = event.params._newURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
