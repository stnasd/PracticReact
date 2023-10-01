import { useSelector } from "react-redux";

export const useAllSelectors = () => {
    const { searchCharacters, loadingStatus } = useSelector(
        (state) => state.search
    );
    const { userOnlineFavorite, userEmail, userOnline } = useSelector(
        (state) => state.login
    );
    const { character, characterLoading } = useSelector(
        (state) => state.characters
    );
    const { favoriteIdCharacters } = useSelector((state) => state.favorite);
    return {
        searchCharacters,
        userOnlineFavorite,
        userEmail,
        character,
        characterLoading,
        userOnline,
        favoriteIdCharacters,
        loadingStatus,
    };
};
