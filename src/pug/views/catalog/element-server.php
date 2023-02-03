<section class="catalog-element">
    <div class="container">
        <div
			class="product-item" id="<?=$itemIds['ID']?>"
			itemscope itemtype="http://schema.org/Product"
		>
            <div class="product-item__preview">
				<?if ($arParams['SHOW_DISCOUNT_PERCENT'] === 'Y' && $price['PERCENT'] > 0):?>
					<div class="badge badge--sale" id="<?=$itemIds['DSC_PERC']?>">
						<span><?=-$price['PERCENT']?>%</span>
					</div>
				<?endif;?>
				<?if($actualItem['PROPERTIES']['NEWPRODUCT']['~VALUE']):?>
					<div class="badge badge--new"">
						<span>New</span>
					</div>
				<?endif;?>

				<?if($actualItem['PROPERTIES']['SALELEADER']['~VALUE']):?>
					<div class="badge badge--top"">
						<span>Top</span>
					</div>
				<?endif;?>

				<div class="product-slider">
                    <div class="swiper-wrapper">
						<?if (!empty($actualItem['MORE_PHOTO'])):?>
							<?foreach ($actualItem['MORE_PHOTO'] as $key => $photo):?>
								<div class="swiper-slide">
									<img src="<?=$photo['SRC']?>" alt="<?=$alt?>" title="<?=$title?>"<?=($key == 0 ? ' itemprop="image"' : '')?>>
								</div>
							<?endforeach;?>
						<?endif;?>
                    </div>
                    <div class="swiper-button-next product-slider-button-next"></div>
                    <div class="swiper-button-prev product-slider-button-prev"></div>
                </div>

                <div thumbsslider="" class="product-slider-thumbs">
                    <div class="swiper-wrapper">
						<?if (!empty($actualItem['MORE_PHOTO'])):?>
							<?foreach ($actualItem['MORE_PHOTO'] as $key => $photo):?>
								<div class="swiper-slide" data-id="<?=$photo['ID']?>">
									<img src="<?=$photo['SRC']?>" alt="<?=$alt?>" title="<?=$title?>"<?=($key == 0 ? ' itemprop="image"' : '')?>>
								</div>
							<?endforeach;?>
						<?endif;?>
                    </div>
                </div>
			</div>

			<div class="product-item__detail">
				<div class="product-item__detail-header">
					<h1><?=$name?></h1>
					<span><small>Артикул:</small>&nbsp;<?=$actualItem['PROPERTIES']['ARTNUMBER']['VALUE']?></span>
				</div>

				<div class="product-item__detail-availability">
					<?if($actualItem['PROPERTIES']['AVAILABLE']['VALUE']):?>
						<span class="available">В наличии</span>
					<?else:?>
						<span class="not-available">Под заказ*</span>
					<?endif;?>
				</div>

				<div class="product-item__detail-price">
					<span id="<?=$itemIds['PRICE_ID']?>">
						<?=$price['PRINT_RATIO_PRICE']?>
					</span>

					<?if ($arParams['SHOW_OLD_PRICE'] === 'Y' && $showDiscount):?>
						<span
							class="old-price"
							id="<?=$itemIds['OLD_PRICE_ID']?>"
						>
							<?=$price['PRINT_RATIO_BASE_PRICE']?>
						</span>
					<?endif;?>
				</div>

				<div class="product-item__detail-options" id="<?=$itemIds['BASKET_PROP_DIV']?>">
					<?
						if (!empty($arResult['PRODUCT_PROPERTIES_FILL'])) {
							foreach ($arResult['PRODUCT_PROPERTIES_FILL'] as $propId => $propInfo) {
								?>
									<input type="hidden" name="<?=$arParams['PRODUCT_PROPS_VARIABLE']?>[<?=$propId?>]" value="<?=htmlspecialcharsbx($propInfo['ID'])?>">
								<?
								unset($arResult['PRODUCT_PROPERTIES'][$propId]);
							}
						}

						$emptyProductProperties = empty($arResult['PRODUCT_PROPERTIES']);
						if (!$emptyProductProperties):
					?>
						<?foreach ($arResult['PRODUCT_PROPERTIES'] as $propId => $propInfo):?>

							<div class="product-item__detail-option">
								<span class="product-item__detail-option-name">
									<?=$arResult['PROPERTIES'][$propId]['NAME']?>
								</span>

								<div class="product-item__detail-option-value">
									<select class="custom-select" name="<?=$arParams['PRODUCT_PROPS_VARIABLE']?>[<?=$propId?>]">
										<?foreach ($propInfo['VALUES'] as $valueId => $value):?>
											<option value="<?=$valueId?>" <?=($valueId == $propInfo['SELECTED'] ? '"selected"' : '')?>>
												<?=$value?>
											</option>
										<?endforeach;?>
									</select>
								</div>
							</div>

						<?endforeach;?>
					<?endif;?>
				</div>

				<div class="product-item__detail-footer">
					<div class="product-item__detail-footer-counter">
						<span>Количество</span>
						<div class="counter">
							<button class="counter__btn counter__btn--dec" id="<?=$itemIds['QUANTITY_DOWN_ID']?>"></button>
							<input class="counter__value"  id="<?=$itemIds['QUANTITY_ID']?>" type="number"
							value="<?=$price['MIN_QUANTITY']?>">
							<button class="counter__btn counter__btn--inc" id="<?=$itemIds['QUANTITY_UP_ID']?>"></button>
						</div>
					</div>

					<button
						class="accent-btn product-item__detail-footer-btn"
						id="<?=$itemIds['ADD_BASKET_LINK']?>"
					>
						<span><?=$arParams['MESS_BTN_ADD_TO_BASKET']?></span>
					</button>
				</div>

				<?if($actualItem['PROPERTIES']['PRODUCTION_TIME']['VALUE'] && !$actualItem['PROPERTIES']['AVAILABLE']['VALUE']):?>
					<div class="product-item__detail-note">
						<p>
							*Товар изготавливается под заказ. <br/>
							Сроки изготовления данного изделия составляют <span><?=$actualItem['PROPERTIES']['PRODUCTION_TIME']['VALUE']?></span> рабочих дней с момента оформления заказа.
						</p>
					</div>
				<?endif;?>
			</div>
		</div>

		<div class="product-description">
            <span class="product-description__title">Описание:</span>
            <div class="product-description__text">
				<?=$actualItem['PREVIEW_TEXT']?>
			</div>
        </div>

		<meta itemprop="name" content="<?=$name?>" />
		<meta itemprop="category" content="<?=$arResult['CATEGORY_PATH']?>" />

		<span itemprop="offers" itemscope itemtype="http://schema.org/Offer">
			<meta itemprop="price" content="<?=$price['RATIO_PRICE']?>" />
			<meta itemprop="priceCurrency" content="<?=$price['CURRENCY']?>" />
			<link itemprop="availability" href="http://schema.org/InStock" />
		</span>
	</div>
</section>
