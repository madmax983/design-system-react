import ButtonGroup from 'design-system-react/components/button-group';

<ButtonGroup>
	<ButtonStateful
		assistiveText="Show Chart"
		buttonVariant="icon"
		iconName="chart"
		iconVariant="border"
		variant="icon"
	/>
	<ButtonStateful
		assistiveText="Filter"
		iconName="filter"
		iconVariant="border"
		variant="icon"
	/>
	<MenuDropdown
		assistiveText="Sort"
		checkmark
		iconName="sort"
		iconVariant="more"
		onSelect={function (item) { console.log(item.label, 'selected'); }}
		openOn="click"
		modal
		options={[
			{ label: 'Sort ascending', value: 'A0' },
			{ label: 'Sort descending', value: 'B0' }
		]}
		value="A0"
		variant="icon"
	/>
</ButtonGroup>