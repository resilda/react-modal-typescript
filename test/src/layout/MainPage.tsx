import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/rootReducer";
import { fetchData } from "../state/actions/actions";
import { MainPageProps } from "./types/propsTypes";
import { MainPageContainer } from "./styles/MainPageContainer";
import DetailsDropdown from "./DetailsDropdown";
import Posts from "./Posts";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function MainPage({
	components,
	valueChecked,
	checked,
	valueSelected,
	selected,
}: MainPageProps) {
	const loading = useSelector((state: RootState) => state.data.loading);
	const error = useSelector((state: RootState) => state.data.error);
	const filteredValue = useSelector(
		(state: RootState) => state.data.filteredValue
	);
	const id = useSelector((state: RootState) => state.post.posts.id);
	const title = useSelector((state: RootState) => state.post.posts.title);
	const body = useSelector((state: RootState) => state.post.posts.body);
	const dispatch = useDispatch();

	const [showCheckIcon, setShowCheckIcon] = useState(false);
	const [showMoreData, setShowMoreData] = useState(false);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	function filteredUsers(filteredList: any, input: String) {
		if (!input) {
			return filteredList;
		}
		const filteredElement = [...filteredList].filter((item) => {
			return item.name.toLowerCase().includes(input.toLowerCase());
		});
		return filteredElement;
	}

	const filteredList = filteredUsers(components, filteredValue);

	return (
		<MainPageContainer>
			{loading && <CircularProgress />}
			{error && <div>{error}</div>}
			<div className="wrapper-0">
				<div className="wrapper-2">
					<h2>Users</h2>
					<div>
						{filteredList.map((user: any) => (
							<div key={user.id} className="wrapper-1">
								<div
									className="checkbox"
									onClick={() => {
										checked(user.id);
										setShowCheckIcon(!showCheckIcon);
									}}
									style={
										showCheckIcon && valueChecked === user.id
											? { backgroundColor: "#2e7d32" }
											: { backgroundColor: "#ffff" }
									}
								>
								</div>
								<div className="user-data">{user.name}</div>
								<div className="arrow-dropdown-icon">
									<ArrowDropDownIcon
										onClick={() => {
											selected(user.id);
											setShowMoreData(!showMoreData);
										}}
									/>
									{showMoreData && valueSelected === user.id ? (
										<DetailsDropdown user={user} />
									) : null}
								</div>
							</div>
						))}
					</div>
				</div>
				<Posts id={id} title={title} body={body} />
			</div>
		</MainPageContainer>
	);
}

export default MainPage;
