// У вас є тип AllType.Існує функція compare, яка приймає два об'єкти.
// Ці об'єкти містять поля AllType. Ваше завдання – використовувати Pick та generics для вказівки,
//  що поля цих параметрів належать AllType.Функція compare повинна повертати AllType.

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type AllTypeInfo = {
  nameColor: Pick<AllType, "name" | "color">;
  positWeig: Pick<AllType, "position" | "weight">;
};

function compare(
  top: AllTypeInfo["nameColor"],
  bottom: AllTypeInfo["positWeig"]
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
