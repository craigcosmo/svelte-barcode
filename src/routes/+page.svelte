<script lang="ts">
	import Barcode from '../lib/svelte/Barcode.svelte';
	let value = 'svelte-barcodedssdfds';

	let elementTags = [
		{ id: 'img', text: 'img' },
		{ id: 'canvas', text: 'canvas' },
		{ id: 'svg', text: 'svg' }
	];
	let selectedElementTag: any;

	let formats = [
		{ id: 'CODE128', text: 'CODE128' },
		{ id: 'EAN13', text: 'EAN13' },
		{ id: 'CODE39', text: 'CODE39' }
	];
	let selectedFormat: any;

	let width = 2;

	let height = 100;

	let text = '';

	let textAligns = [
		{ id: 'left', text: 'left' },
		{ id: 'center', text: 'center' },
		{ id: 'right', text: 'right' }
	];
	let selectedTextAlign: any;

	let textPositions = [
		{ id: 'bottom', text: 'bottom' },
		{ id: 'top', text: 'top' }
	];
	let selectedTextPosition: any;

	let textMargin = 2;

	let fontSize = 20;

	let background = '#ffffff';

	let lineColor = '#000000';

	let margin = 10;
</script>

<Barcode
	{value}
	elementTag={selectedElementTag ? selectedElementTag.id : null}
	options={{
		format: selectedFormat ? selectedFormat.id : null,
		width: width,
		height: height,
		text: text,
		textAlign: selectedTextAlign ? selectedTextAlign.id : null,
		textPosition: selectedTextPosition ? selectedTextPosition.id : null,
		textMargin: textMargin,
		fontSize: fontSize,
		background: background,
		lineColor: lineColor,
		margin: margin
	}}
/>
