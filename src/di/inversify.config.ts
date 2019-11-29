import { Container } from "inversify";
import TYPES from "./types";
import { Ninja, Katana, Shuriken } from "./entities";
import { IWarrior, IWeapon, IThrowableWeapon } from "./interfaces";

var container = new Container();
container.bind<IWarrior>(TYPES.Warrior).to(Ninja);
container.bind<IWeapon>(TYPES.Weapon).to(Katana);
container.bind<IThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export default container;

container.get