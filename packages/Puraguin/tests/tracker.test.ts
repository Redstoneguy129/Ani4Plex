import Puraguin, { AuthType } from "../";

test('test tracker', () => {
    const text = "text";
    expect(text).toEqual("text");
})

test('test class', () => {
    class tracker extends Puraguin {
        getShow(): void {
            throw new Error("Method not implemented.");
        }
}
    const plugin = new tracker(AuthType.USER);
    expect(plugin.authType).toEqual(AuthType.NIL);
})