/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var dnanvarianceyc = require( '@stdlib/stats-base-dnanvarianceyc' );
var sqrt = require( '@stdlib/math-base-special-sqrt' );


// MAIN //

/**
* Computes the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {Float64Array} x - input array
* @param {integer} stride - stride length
* @returns {number} standard deviation
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
* var N = x.length;
*
* var v = dnanstdevyc( N, 1, x, 1 );
* // returns ~2.0817
*/
function dnanstdevyc( N, correction, x, stride ) {
	return sqrt( dnanvarianceyc( N, correction, x, stride ) );
}


// EXPORTS //

module.exports = dnanstdevyc;