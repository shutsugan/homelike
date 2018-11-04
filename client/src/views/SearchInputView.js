import React from 'react';

const SearchInputView = ({name, items, handleChange}) => (
	<div className="search-bar__input-container">
		<label onClick={this.handleClick}>
			{name.toUpperCase()}:
		</label>
		<input 
			name={`by_${name}`} 
			list={name} 
			onChange={handleChange} 
		/>
		<datalist id={name}>
			{items.map((value, index) => {
				return <option key={index} value={value} />
			})}
		</datalist>
	</div>
);

export default SearchInputView;