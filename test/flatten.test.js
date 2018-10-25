/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Licensed under the MIT License.
 */

const assert = require("assert");
const flatten = require("../src/flatten");

describe("flatten", function() {
  it("should be a function", () => {
    assert(typeof flatten === "function");
  });

  it("should do nothing", () => {
    assert.deepStrictEqual(flatten([]), []);
    assert.deepStrictEqual(flatten([[[[[[[[[[[]]]]]]]]]]]), []);
  });

  it("should flatten nested arrays:", function() {
    assert.deepStrictEqual(flatten(["a", "b", ["c"], "d", ["e"]]), [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]);
  });

  it("should flatten deeply nested arrays:", function() {
    assert.deepStrictEqual(
      flatten(["a", [[[[[[[["b", [["c"]]]]]], "d", ["e"]]]]]]),
      ["a", "b", "c", "d", "e"]
    );
    assert.deepStrictEqual(flatten(["a", "b", ["c"], "d", ["e"]]), [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]);
    assert.deepEqual(
      flatten([
        [
          "a",
          [
            "b",
            [
              "k",
              [
                "a",
                [
                  "b",
                  ["c"],
                  [
                    [
                      "a",
                      [
                        [
                          "a",
                          [
                            "b",
                            [
                              "k",
                              [
                                "a",
                                ["b", ["c"]],
                                [
                                  "a",
                                  [
                                    "x",
                                    ["c"],
                                    ["a", ["x", ["k"]]],
                                    ["d", ["z"]]
                                  ]
                                ],
                                ["d", ["m"]]
                              ],
                              ["d", ["e"]]
                            ]
                          ]
                        ],
                        ["d", ["e"]]
                      ],
                      [
                        "b",
                        [
                          "k",
                          [
                            "a",
                            ["b", ["c"]],
                            [
                              "a",
                              ["x", ["c"], ["a", ["x", ["k"]]], ["d", ["z"]]]
                            ],
                            ["d", ["m"]]
                          ],
                          ["d", ["e"]]
                        ]
                      ]
                    ],
                    ["d", ["e"]]
                  ]
                ],
                [
                  "a",
                  [
                    "x",
                    ["c"],
                    [
                      "a",
                      ["x", ["k"]],
                      [
                        [
                          "a",
                          [
                            "b",
                            [
                              "k",
                              [
                                "a",
                                ["b", ["c"]],
                                [
                                  "a",
                                  [
                                    "x",
                                    ["c"],
                                    ["a", ["x", ["k"]]],
                                    ["d", ["z"]]
                                  ]
                                ],
                                ["d", ["m"]]
                              ],
                              ["d", ["e"]]
                            ]
                          ]
                        ],
                        ["d", ["e"]]
                      ]
                    ],
                    ["d", ["z"]]
                  ]
                ],
                ["d", ["m"]]
              ],
              ["d", ["e"]]
            ]
          ]
        ],
        ["d", ["e"]]
      ]),
      [
        "a",
        "b",
        "k",
        "a",
        "b",
        "c",
        "a",
        "a",
        "b",
        "k",
        "a",
        "b",
        "c",
        "a",
        "x",
        "c",
        "a",
        "x",
        "k",
        "d",
        "z",
        "d",
        "m",
        "d",
        "e",
        "d",
        "e",
        "b",
        "k",
        "a",
        "b",
        "c",
        "a",
        "x",
        "c",
        "a",
        "x",
        "k",
        "d",
        "z",
        "d",
        "m",
        "d",
        "e",
        "d",
        "e",
        "a",
        "x",
        "c",
        "a",
        "x",
        "k",
        "a",
        "b",
        "k",
        "a",
        "b",
        "c",
        "a",
        "x",
        "c",
        "a",
        "x",
        "k",
        "d",
        "z",
        "d",
        "m",
        "d",
        "e",
        "d",
        "e",
        "d",
        "z",
        "d",
        "m",
        "d",
        "e",
        "d",
        "e"
      ]
    );
  });
});
