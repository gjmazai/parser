export const lang = {
	test: 'Hello world!',
	hello: 'Hello {[ world - values[0] ]}!',
	world: 'Hello {[values[0] values[1]]} {[values[2]]} {[values[0]]}',
	testing: {
		test: '{[values[0] values[1]]} {[values[2]]} {[values[0]]}',
		child: '{[values[0] other text values[1]]} {0}',
		mock: '{[values[2] values[1]]} {[values[2]]} {[values[0]]} {[values[2]]} Hellow world {[values[5]]}',
	}
}