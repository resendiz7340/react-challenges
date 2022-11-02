import { FunctionComponent, PropsWithChildren, useState } from "react";
import { useSetRecoilState } from "recoil";
import { ListItem, List } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { ICategory } from "../../atoms/categories";
import { idSelectedState } from "../../atoms/idSelected";

interface ICategoryItemPros {
  category: ICategory;
}

const CategoryItem: FunctionComponent<PropsWithChildren<ICategoryItemPros>> = (
  props
) => {
  const [isOpened, setIsOpened] = useState(false);
  const setIdSelected = useSetRecoilState(idSelectedState);

  const toggleOpened = () => {
    setIdSelected(props.category.id);
    setIsOpened(!isOpened);
  };

  const hasSublevels = props.category.sublevels ? true : false;

  return (
    <ListItem cursor="pointer">
      <span onClick={toggleOpened}>{props.category.name}</span>
      {isOpened && hasSublevels && <ChevronUpIcon />}
      {!isOpened && hasSublevels && <ChevronDownIcon />}
      {isOpened && props.category.sublevels && (
        <List>
          {props.category.sublevels.map((sublevel) => (
            <CategoryItem key={sublevel.id} category={sublevel} />
          ))}
        </List>
      )}
    </ListItem>
  );
};

export default CategoryItem;
