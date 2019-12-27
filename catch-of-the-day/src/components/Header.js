import React from 'react';

// class Header extends React.Component {
//     render() {
//         return (

//             <header className="top">
//                 <h1>
//                     Catch
//                     <span className="ofThe">
//                         <span className="of">Of</span>
//                         <span className="the">The </span>
//                     </span>
//                     Day
//                     </h1>
//                 <h3 className="tagline">
//                     <span>{this.props.tagline}</span>
//                 </h3>
//             </header>

//         );
//     }
// }

// klasa header je statless komponenta, njoj se samo proslijede podaci koje ona prikaze, nema ponasanje
// nema potrebe da bude definisana kao puna komponenta pa je mozemo konvertovati u statles funkcionalnu komponentu
// koje ce u sustini biti funkcija, posto ovo vise nije objekat ne pisemo this vec prosljedjujemo props kao parametar

// function Header (props){
//     return (
//         <header className="top">
//             <h1>
//                 Catch
//                 <span className="ofThe">
//                     <span className="of">Of</span>
//                     <span className="the">The </span>
//                 </span>
//                 Day
//                 </h1>
//             <h3 className="tagline">
//                 <span>{props.tagline}</span>
//             </h3>
//         </header>

//     );
// }

// umjesto obicnih funkcija mozemo da koristimo arrow funkcije, ne dobijemo nista ali to je konvencija
// const Header = (props) => {
//     return (
//         <header className="top">
//             <h1>
//                 Catch
//                 <span className="ofThe">
//                     <span className="of">Of</span>
//                     <span className="the">The </span>
//                 </span>
//                 Day
//                 </h1>
//             <h3 className="tagline">
//                 <span>{props.tagline}</span>
//             </h3>
//         </header>

//     );
// }

// moze se na razne nacine skratiti, tipa da izbacimo return pa se implicitno poziva return umjesto da eksplicitno pozivamo
const Header = props =>(
        <header className="top">
            <h1>
                Catch
                <span className="ofThe">
                    <span className="of">Of</span>
                    <span className="the">The </span>
                </span>
                Day
                </h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
        </header>

    );

//dakodje mozemo dekomponovati props objekat pa da direktno proslijedimo atribut, i onda ne pozivamo kao props jer smo uradili
// dekompoziciju atributa
// const Header = ({tagline}) =>(
//     <header className="top">
//         <h1>
//             Catch
//             <span className="ofThe">
//                 <span className="of">Of</span>
//                 <span className="the">The </span>
//             </span>
//             Day
//             </h1>
//         <h3 className="tagline">
//             <span>{tagline}</span>
//         </h3>
//     </header>

// );

export default Header;