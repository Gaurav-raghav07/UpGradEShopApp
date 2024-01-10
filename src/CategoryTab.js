import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function CategoryToggleButton({onCategorySet}) {
  const [alignment, setAlignment] = React.useState('All');
  const [proCategory, setProCategory] = React.useState([]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    onCategorySet(alignment);
  };

  const fetchCategories = async () => {
        const callFetchCategoryAPi = await fetch("http://localhost:8080/api/products/categories", 
            { 
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                }
            );

        const resolveCategories = await callFetchCategoryAPi.json();
        console.log(resolveCategories);
        setProCategory(resolveCategories);
};
  
React.useEffect(()=>{
    fetchCategories();
  },[]);

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    > 
      <ToggleButton value="all">All</ToggleButton>
      {proCategory ? proCategory.map(element => {
        return <ToggleButton value={element}>{element}</ToggleButton>
      }): null}
    </ToggleButtonGroup>
  );
}